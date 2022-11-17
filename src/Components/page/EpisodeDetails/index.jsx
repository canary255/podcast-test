import { PodcastInfo } from "../../atom/PodcastInfo/index";
import { EpisodeInfo } from "../../atom/EpisodeInfo/index";

export const EpisodeDetails = () => {
  const podcast = {
    title: "Elysium",
    author: "Stratovarius",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi arcu, vel eleifend neque semper dapibus. Nam tempus faucibus quam, ornare tempor felis faucibus ac.",
    src: "https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg",
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3 col-span-1">
        <PodcastInfo
          author={podcast.author}
          src={podcast.src}
          title={podcast.title}
        >
          {podcast.description}
        </PodcastInfo>
      </div>
      <div className="col-span-2 row-span-2">
        <EpisodeInfo />
      </div>
    </div>
  );
};
