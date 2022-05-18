import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoND } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoND,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoND>;

const PurpleBackground = styled.div`
  background-color: ${NupesColors.PURPLE};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoNDStories = () => (
  <ThemeProvider>
    <h1>Logo PCF</h1>
    <LogoND height="200px" />
    <h1>Logo PCF uni</h1>
    <LogoND height="200px" color={NupesColors.PURPLE} />
    <PurpleBackground>
      <LogoND height="200px" color={OtherColors.WHITE} />
    </PurpleBackground>
  </ThemeProvider>
);
