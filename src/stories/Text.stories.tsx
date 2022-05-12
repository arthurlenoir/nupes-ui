import React from "react";
import { Text } from "../components/Text";
import { GlobalStyle } from "../GlobalStyle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Text",
  component: Text,
};

export const TextStories = () => (
  <div>
    <h1>Texte</h1>
    <Text>La nouvelle union populaire écologique et sociale</Text>
    <GlobalStyle />
  </div>
);
