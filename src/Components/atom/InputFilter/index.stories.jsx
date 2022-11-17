import React from "react";
import { InputFilter } from ".";

export default {
  title: "Atom/InputFilter",
  component: InputFilter,
  argTypes: {},
};

const Template = (args) => <InputFilter {...args}>{args.children}</InputFilter>;

export const Default = Template.bind({});
Default.args = {
  children: 10,
};
