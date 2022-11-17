import { PodcastInfo } from "../../atom/PodcastInfo/index";
import { NumberEpisodes } from "../../atom/NumberEpisodes/index";
import { EpisodeList } from "../../atom/EpisodeList/index";
export const Podcast = () => {
  const podcast = {
    title: "Elysium",
    author: "Stratovarius",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi arcu, vel eleifend neque semper dapibus. Nam tempus faucibus quam, ornare tempor felis faucibus ac.",
    src: "https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg",
  };

  const list = [
    { title: "Darkest hours", date: "15/01/2011", duration: "4:11" },
    { title: "The Game Never Ends", date: "24/10/2011", duration: "3:53" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Darkest hours", date: "15/01/2011", duration: "4:11" },
    { title: "The Game Never Ends", date: "24/10/2011", duration: "3:53" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Darkest hours", date: "15/01/2011", duration: "4:11" },
    { title: "The Game Never Ends", date: "24/10/2011", duration: "3:53" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
    { title: "Under Flaming Skies", date: "08/04/2011", duration: "3:51" },
  ];

  return (
    <div class="grid grid-rows-3 grid-flow-col gap-4">
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
        <NumberEpisodes>{list.length}</NumberEpisodes>
        <EpisodeList list={list} />
      </div>
    </div>
  );
};
