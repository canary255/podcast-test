import { PodcastInfo } from "../../Components/PodcastInfo/index";
import { EpisodeInfo } from "../../Components/EpisodeInfo/index";

export const EpisodeDetails = () => {
  const podcast = {
    title: "Elysium",
    author: "Stratovarius",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi arcu, vel eleifend neque semper dapibus. Nam tempus faucibus quam, ornare tempor felis faucibus ac.",
    src: "https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg",
  };

  const episode = {
    title: "The game never ends",
    src: "http://themushroomkingdom.net/sounds/wav/sm64/sm64_exit_course_pause_menu.wav",
  };

  const description = `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed ex urna, rhoncus vel sapien eget, lacinia iaculis arcu. Nulla convallis dignissim lorem, 
  egestas tempus ante bibendum aliquam. <b>Etiam tempus mattis scelerisque.</b> 
  Fusce porttitor consectetur placerat. Proin non blandit risus. 
  Fusce a arcu nec arcu ultrices dignissim. Aliquam euismod sit amet ipsum posuere elementum. 
  Praesent sapien augue, varius sed egestas ac, lobortis ac lorem.</p>
  <a class="text-blue-500" href="http://www.google.com" target="_blank">Donec imperdiet euismod lorem, 
  non luctus ligula finibus sit amet. Duis auctor purus sit amet efficitur auctor.</a></div>`;

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-24">
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
        <EpisodeInfo
          title={episode.title}
          src={episode.src}
          description={description}
        />
      </div>
    </div>
  );
};
