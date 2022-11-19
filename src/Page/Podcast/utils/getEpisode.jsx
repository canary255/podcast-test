export const getEpisode = async (url, setData, signal) => {
  try {
    /*const podcast = localStorage?.getItem("podcasts");
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
    }*/

    return await fetch(url, { signal: signal })
      .then((response) => response.json())
      .then((data) => {
        setData(() => {
          return data;
        });

        /*localStorage?.setItem("podcasts", JSON.stringify(data.feed.entry));

        //store next day value
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        localStorage?.setItem("timePodcast", tomorrow.getTime());*/
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Successfully aborted operation");
        } else {
          console.log("error", error);
        }
      });
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
