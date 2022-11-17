import React from "react";
import { Header } from ".";

export default {
  title: "Atom/Header",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header>{args.children}</Header>;

export const Default = Template.bind({});
Default.args = {
  children: 100,
};
