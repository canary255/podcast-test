import React from "react";
import { Loading } from ".";

export default {
  title: "Atom/Loading",
  component: Loading,
  argTypes: {},
};

const Template = (args) => <Loading>{args.children}</Loading>;

export const Default = Template.bind({});
Default.args = {
  children: 100,
};
