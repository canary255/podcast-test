import React from "react";
import { CardWithAvatar } from ".";

export default {
  title: "Atom/Avatar",
  component: CardWithAvatar,
  argTypes: {},
};

const Template = (args) => (
  <CardWithAvatar {...args}>{args.children}</CardWithAvatar>
);

export const Default = Template.bind({});
Default.args = {
  children: "Elysium",
  author: "Stratovarius",
  src: "https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg",
};
