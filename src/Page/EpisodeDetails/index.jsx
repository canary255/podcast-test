import { PodcastInfo } from "../../Components/PodcastInfo/index";
import { EpisodeInfo } from "../../Components/EpisodeInfo/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEpisodeDetails } from "./utils/getEpisodeDetails";
import { Loading } from "../../Components/Loading";

export const EpisodeDetails = () => {
  const { podcastId, episodeId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getEpisodeDetails(podcastId, episodeId, setData, signal);

    return () => controller.abort();
  }, [podcastId, episodeId]);

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-24">
      <div className="row-span-3 col-span-1">
        {!data ? <Loading /> : null}
        <PodcastInfo
          author={data?.author}
          src={data?.image}
          title={data?.title}
          id={podcastId}
        >
          {data?.description}
        </PodcastInfo>
      </div>
      <div className="col-span-2 row-span-2">
        {data ? (
          <EpisodeInfo
            title={data?.episode?.title}
            src={`${data?.episode?.enclosures[0]?.url}`}
            type={data ? data?.episode?.enclosures[0]?.type : null}
            description={data?.episode?.description}
          />
        ) : null}
      </div>
    </div>
  );
};
