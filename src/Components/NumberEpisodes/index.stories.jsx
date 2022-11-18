import React from "react";
import { NumberEpisodes } from ".";

export default {
  title: "Atom/NumberEpisodes",
  component: NumberEpisodes,
  argTypes: {},
};

const Template = (args) => <NumberEpisodes>{args.children}</NumberEpisodes>;

export const Default = Template.bind({});
Default.args = {
  children: 10,
};
