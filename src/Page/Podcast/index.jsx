import { PodcastInfo } from "../../Components/PodcastInfo/index";
import { NumberEpisodes } from "../../Components/NumberEpisodes/index";
import { EpisodeList } from "../../Components/EpisodeList/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpisode } from "./utils/getEpisode";
import { Loading } from "../../Components/Loading";
export const Podcast = () => {
  const [data, setData] = useState();
  //const [trackList, setTrackList] = useState();
  const [loading, setLoading] = useState(true);

  const { podcastId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getEpisode(
      `https://itunes.apple.com/lookup?id=${podcastId}`,
      setData,
      signal
    ).finally(() =>
      setLoading(() => {
        return false;
      })
    );
    return () => controller.abort();
  }, [podcastId]);

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      {loading ? <Loading /> : null}
      {console.log(data)}
      <div className="row-span-3 col-span-1">
        <PodcastInfo
          author={data?.results[0]?.artistName}
          src={data?.results[0]?.artworkUrl600}
          title={data?.results[0]?.trackName}
        >
          {"podcast.description"}
        </PodcastInfo>
      </div>
      <div className="col-span-2 row-span-2">
        <NumberEpisodes>{data?.results[0]?.trackCount}</NumberEpisodes>
        <EpisodeList list={[]} />
      </div>
    </div>
  );
};
