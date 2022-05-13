import React from "react";
import ThemeProvider from "../components/ThemeProvider";
import { Title } from "../components/Title";
import { NupesColors } from "../stylesheet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography",
  component: Title,
};

export const TitleStories = () => (
  <ThemeProvider primary={NupesColors.PINK}>
    <h1>Titre</h1>
    <Title>Mélenchon 1er ministre</Title>
    <h1>Titre Principal</h1>
    <Title variant="primary">Ruffin 1er ministre</Title>
    <h1>Titre Secondaire</h1>
    <Title variant="secondary">Rousseau 1ère ministre</Title>
  </ThemeProvider>
);
