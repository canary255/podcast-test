import { PodcastInfo } from "../../Components/PodcastInfo/index";
import { NumberEpisodes } from "../../Components/NumberEpisodes/index";
import { EpisodeList } from "../../Components/EpisodeList/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpisode } from "./utils/getEpisode";
import { Loading } from "../../Components/Loading";
export const Podcast = () => {
  const [data, setData] = useState();

  const { podcastId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      await getEpisode(
        `https://itunes.apple.com/lookup?id=${podcastId}`,
        setData,
        signal
      );
    }

    fetchData();

    return () => controller.abort();
  }, [podcastId]);

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      {!data ? <Loading /> : null}
      {console.log(data)}
      <div className="row-span-3 col-span-1">
        <PodcastInfo
          author={data?.podcastInfo?.results[0]?.artistName}
          src={data?.podcastInfo?.results[0]?.artworkUrl600}
          title={data?.podcastInfo?.results[0]?.trackName}
        >
          {"podcast.description"}
        </PodcastInfo>
      </div>
      <div className="col-span-2 row-span-2">
        <NumberEpisodes>
          {data?.podcastInfo?.results[0]?.trackCount}
        </NumberEpisodes>
        <EpisodeList list={[]} />
      </div>
    </div>
  );
};
