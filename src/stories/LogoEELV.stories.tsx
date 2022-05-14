import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoEELV } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoEELV,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoEELV>;

const GreenBackground = styled.div`
  background-color: ${NupesColors.GREEN};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoEELVStories = () => (
  <ThemeProvider>
    <h1>Logo EELV</h1>
    <LogoEELV height="200px" />
    <h1>Logo EELV uni</h1>
    <LogoEELV height="200px" color={NupesColors.GREEN} />
    <GreenBackground>
      <LogoEELV height="200px" color={OtherColors.WHITE} />
    </GreenBackground>
  </ThemeProvider>
);
