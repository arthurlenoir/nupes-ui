import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoNupes, LogoNupesWithText } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors } from "../stylesheet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoNupes,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoNupes>;

export const LogoStories = () => (
  <ThemeProvider>
    <h1>Logo NUPES</h1>
    <LogoNupes height="200px" />
    <h1>Logo NUPES uni</h1>
    <LogoNupes height="200px" color={NupesColors.PURPLE} />
    <h1>Logo Nupes complet</h1>
    <LogoNupesWithText height="200px" />
  </ThemeProvider>
);
