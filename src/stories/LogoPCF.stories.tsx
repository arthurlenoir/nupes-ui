import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoPCF } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoPCF,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoPCF>;

const RedBackground = styled.div`
  background-color: ${NupesColors.RED};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoPCFStories = () => (
  <ThemeProvider>
    <h1>Logo PCF</h1>
    <LogoPCF height="200px" />
    <h1>Logo PCF uni</h1>
    <LogoPCF height="200px" color={NupesColors.RED} />
    <RedBackground>
      <LogoPCF height="200px" color={OtherColors.WHITE} />
    </RedBackground>
  </ThemeProvider>
);
