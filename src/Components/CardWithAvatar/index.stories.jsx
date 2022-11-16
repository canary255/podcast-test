import React from "react";
import { CardWithAvatar } from "../Header";

export default {
  title: "Component/Avatar",
  component: CardWithAvatar,
  argTypes: {},
};

const Template = (args) => <CardWithAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
