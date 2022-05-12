import React from "react";
import { SubTitle } from "../components/SubTitle";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/SubTitle",
  component: SubTitle,
};

export const SubTitleStories = () => (
  <ThemeProvider>
    <h1>Sous-titre</h1>
    <SubTitle>Un autre monde est possible</SubTitle>
  </ThemeProvider>
);