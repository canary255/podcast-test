import React from "react";
import { EpisodeInfo } from ".";

export default {
  title: "Atom/EpisodeInfo",
  component: EpisodeInfo,
  argTypes: {},
};

const description = `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed ex urna, rhoncus vel sapien eget, lacinia iaculis arcu. Nulla convallis dignissim lorem, 
  egestas tempus ante bibendum aliquam. <b>Etiam tempus mattis scelerisque.</b> 
  Fusce porttitor consectetur placerat. Proin non blandit risus. 
  Fusce a arcu nec arcu ultrices dignissim. Aliquam euismod sit amet ipsum posuere elementum. 
  Praesent sapien augue, varius sed egestas ac, lobortis ac lorem.</p>
  <a class="text-blue-500" href="http://www.google.com" target="_blank">Donec imperdiet euismod lorem, 
  non luctus ligula finibus sit amet. Duis auctor purus sit amet efficitur auctor.</a></div>`;

const Template = (args) => <EpisodeInfo {...args}>{args.children}</EpisodeInfo>;

export const Default = Template.bind({});
Default.args = {
  title: "The game never ends",
  description: description,
  src: "http://themushroomkingdom.net/sounds/wav/sm64/sm64_exit_course_pause_menu.wav",
};
