export const fetchData = async (url, setData, setFilteredData, signal) => {
  try {
    if (
      localStorage?.getItem("podcasts") &&
      localStorage?.getItem("timePodcast")
    ) {
      const countDownDate = localStorage?.getItem("timePodcast");
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      if (distance > 0) setData(JSON.parse(localStorage?.getItem("podcasts")));
      setFilteredData(JSON.parse(localStorage?.getItem("podcasts")));
      return;
    }

    return fetch(url, { signal: signal })
      .then((response) => response.json())
      .then((data) => {
        setData(() => {
          return data.feed.entry;
        });

        setFilteredData(() => {
          return data.feed.entry;
        });

        localStorage?.setItem("podcasts", JSON.stringify(data.feed.entry));

        //store next day value
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        localStorage?.setItem("timePodcast", tomorrow.getTime());
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
