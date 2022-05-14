import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoLFI } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

export default {
  title: "Graphics",
  component: LogoLFI,
} as ComponentMeta<typeof LogoLFI>;

const GreenBackground = styled.div`
  background-color: ${NupesColors.PURPLE};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoLFIStories = () => (
  <ThemeProvider>
    <h1>Logo LFI</h1>
    <LogoLFI height="200px" />
    <h1>Logo LFI uni</h1>
    <LogoLFI height="200px" color={NupesColors.RED} />
    <GreenBackground>
      <LogoLFI height="200px" color={OtherColors.WHITE} />
    </GreenBackground>
  </ThemeProvider>
);
