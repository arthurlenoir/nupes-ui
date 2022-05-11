import React from "react";
import { Title } from "../components/Title";
import { GlobalStyle } from "../GlobalStyle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Title",
  component: Title,
};

export const TitleStories = () => (
  <div>
    <h1>Logo</h1>
    <Title>Mélenchon 1er ministre</Title>
    <GlobalStyle />
  </div>
);
