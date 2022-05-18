import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoPS } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoPS,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoPS>;

const PinkBackground = styled.div`
  background-color: ${NupesColors.PINK};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoPSStories = () => (
  <ThemeProvider>
    <h1>Logo PS</h1>
    <LogoPS height="200px" />
    <h1>Logo PS uni</h1>
    <LogoPS height="200px" color={NupesColors.PINK} />
    <PinkBackground>
      <LogoPS height="200px" color={OtherColors.WHITE} />
    </PinkBackground>
  </ThemeProvider>
);
