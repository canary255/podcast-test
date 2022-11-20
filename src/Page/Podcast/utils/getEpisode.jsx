import parse from "rss-to-json";

export const getEpisode = async (url, setData, signal) => {
  try {
    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(`${corsUrl}${url}`, { signal: signal });
    const podcastInfo = await response.json();

    var rss = await parse(`${corsUrl}${podcastInfo?.results[0]?.feedUrl}`, {
      signal: signal,
    });

    setData(() => {
      return { rss: { ...rss, author: podcastInfo?.results[0]?.artistName } };
    });
  } catch (error) {
    console.log("error", error);
  }
};
