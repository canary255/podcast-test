import React from "react";
import { CardWithAvatar } from ".";

export default {
  title: "Component/Avatar",
  component: CardWithAvatar,
  argTypes: {},
};

const Template = (args) => <CardWithAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
