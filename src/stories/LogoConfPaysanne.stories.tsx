import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoConfPaysanne } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoConfPaysanne,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoConfPaysanne>;

const YellowBackground = styled.div`
  background-color: ${NupesColors.YELLOW};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoConfederationPaysanneStories = () => (
  <ThemeProvider>
    <h1>Logo Confédération paysanne</h1>
    <LogoConfPaysanne height="200px" />
    <h1>Logo Confédération paysanne uni</h1>
    <LogoConfPaysanne height="200px" color={NupesColors.RED} />
    <YellowBackground>
      <LogoConfPaysanne height="200px" color={OtherColors.BLACK} />
    </YellowBackground>
  </ThemeProvider>
);
