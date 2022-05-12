import React from "react";
import { Text } from "../components/Text";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Text",
  component: Text,
};

export const TextStories = () => (
  <ThemeProvider>
    <h1>Texte</h1>
    <Text>La nouvelle union populaire écologique et sociale</Text>
  </ThemeProvider>
);
