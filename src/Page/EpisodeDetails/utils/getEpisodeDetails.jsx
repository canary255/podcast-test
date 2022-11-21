import parse from "rss-to-json";

export const getEpisodeDetails = async (
  podcastId,
  episodeId,
  setData,
  signal
) => {
  try {
    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(
      `${corsUrl}https://itunes.apple.com/lookup?id=${podcastId}`,
      { signal: signal }
    );

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const podcastInfo = await response.json();

    var rss = await parse(`${corsUrl}${podcastInfo?.results[0]?.feedUrl}`, {
      signal: signal,
    });

    const episode = {
      episode: rss?.items[parseInt(rss?.items.length - episodeId)],
      author: podcastInfo?.results[0]?.artistName,
      image: podcastInfo?.results[0]?.artworkUrl600,
      title: rss?.title,
      description: rss?.description,
    };

    setData(() => {
      return episode;
    });
  } catch (error) {
    console.log("error", error);
  }
};
