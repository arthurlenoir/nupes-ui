import React from "react";
import { SubTitle } from "../components/SubTitle";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography",
  component: SubTitle,
};

export const SubTitleStories = () => (
  <ThemeProvider>
    <h1>Sous-titre</h1>
    <SubTitle>Un autre monde est possible</SubTitle>
    <h1>Sous-titre avec sur-lignage primaire</h1>
    <SubTitle variant="primary">Un autre monde est possible</SubTitle>
    <h1>Sous-titre avec surlignage secondaire</h1>
    <SubTitle variant="secondary">Un autre monde est possible</SubTitle>
  </ThemeProvider>
);
