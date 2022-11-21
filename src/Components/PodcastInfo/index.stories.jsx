import React from "react";
import { PodcastInfo } from ".";

export default {
  title: "Atom/PodcastInfo",
  component: PodcastInfo,
  argTypes: {},
};

const Template = (args) => <PodcastInfo {...args}>{args.children}</PodcastInfo>;

export const Default = Template.bind({});
Default.args = {
  title: "Elysium",
  author: "Stratovarius",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi arcu, vel eleifend neque semper dapibus. Nam tempus faucibus quam, ornare tempor felis faucibus ac.",
  src: "https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg",
};
