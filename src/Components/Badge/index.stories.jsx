import React from "react";
import { Badge } from ".";

export default {
  title: "Atom/Badge",
  component: Badge,
  argTypes: {},
};

const Template = (args) => <Badge>{args.children}</Badge>;

export const Default = Template.bind({});
Default.args = {
  children: 100,
};
