import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoSoup } from "../components/LogoSoup";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoSoup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoSoup>;

export const LogoSoupStories = () => (
  <ThemeProvider>
    <h1>Tous les logos</h1>
    <LogoSoup />
  </ThemeProvider>
);
