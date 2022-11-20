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
        setData(JSON.parse(podcast));
        setFilteredData(JSON.parse(podcast));
        return;
      }
    }

    const response = await fetch(url, { signal: signal });
    const data = await response.json();
    const value = data.feed.entry;

    setData(() => {
      return value;
    });
    setFilteredData(() => {
      return value;
    });

    localStorage?.setItem("podcasts", JSON.stringify(value));
    localStorage?.setItem("timePodcast", getNextDay());
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
