import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { MainPage } from ".";

export default {
  title: "Page/MainPage",
  component: MainPage,
  decorators: [withRouter],
  argTypes: {},
};

const Template = () => <MainPage />;

export const Default = Template.bind({});
Default.args = {};
