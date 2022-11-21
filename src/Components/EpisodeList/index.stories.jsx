import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { EpisodeList } from ".";

export default {
  title: "Atom/EpisodeList",
  component: EpisodeList,
  decorators: [withRouter],
  argTypes: {},
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
];

const Template = (args) => <EpisodeList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: list,
};
