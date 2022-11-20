import { getNextDay } from "../../../Domains/getNextDay";

export const fetchData = async (url, setData, setFilteredData, signal) => {
  try {
    const podcast = localStorage?.getItem("podcasts");
    const timePodcast = localStorage?.getItem("timePodcast");
    if (podcast && timePodcast) {
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = timePodcast - now;

      if (distance > 0) {
        setData(JSON.parse(localStorage?.getItem("podcasts")));
        setFilteredData(JSON.parse(localStorage?.getItem("podcasts")));
        return;
      }
    }

    const response = await fetch(url, { signal: signal });
    const data = await response.json();
    setData(data);
    setFilteredData(data);
    localStorage?.setItem("podcasts", JSON.stringify(data));
    localStorage?.setItem("timePodcast", getNextDay());
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
