import React from "react";
import { Podcast } from ".";

export default {
  title: "Page/Podcast",
  component: Podcast,
  argTypes: {},
};

const Template = () => <Podcast />;

export const Default = Template.bind({});
Default.args = {};
