import parse from "rss-to-json";
import { getNextDay } from "../../../Domains/getNextDay";

export const getEpisode = async (podcastId, setData, signal) => {
  try {
    const podcast = JSON.parse(localStorage?.getItem("episodeList"));
    if (podcast && podcast[podcastId]) {
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = podcast[podcastId].time - now;

      if (distance > 0) {
        setData(() => {
          return podcast[podcastId];
        });
        return;
      }
    }

    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(
      `${corsUrl}https://itunes.apple.com/lookup?id=${podcastId}`,
      { signal: signal }
    );
    const podcastInfo = await response.json();

    var rss = await parse(`${corsUrl}${podcastInfo?.results[0]?.feedUrl}`, {
      signal: signal,
    });

    const episodeList = {
      rss: {
        title: rss.title,
        author: podcastInfo?.results[0]?.artistName,
        image: podcastInfo?.results[0]?.artworkUrl600,
        description: rss.description,
        items: rss.items.map((item) => {
          return {
            title: item.title,
            date: new Date(item?.created).toLocaleDateString(),
            duration: item?.itunes_duration,
          };
        }),
      },
    };

    const episodeListStorage = {
      ...podcast,
      [podcastId]: { ...episodeList, time: getNextDay() },
    };

    localStorage?.setItem("episodeList", JSON.stringify(episodeListStorage));

    setData(() => {
      return episodeList;
    });
  } catch (error) {
    console.log("error", error);
  }
};
