import React from "react";
import { Highlight } from "../components/Highlight";
import { Text } from "../components/Text";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography",
  component: Text,
};

export const TextStories = () => (
  <ThemeProvider>
    <h1>Texte</h1>
    <Text>La nouvelle union populaire écologique et sociale</Text>
    <h1>Texte with highlighted parts</h1>
    <Text>
      La nouvelle union populaire écologique et sociale rassemble une gauche{" "}
      <Highlight variant="secondary">unie pour gouverner.</Highlight>
    </Text>
  </ThemeProvider>
);
