import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LogoGenerations } from "../components/Logos";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors, OtherColors } from "../stylesheet";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
  component: LogoGenerations,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LogoGenerations>;

const PurpleBackground = styled.div`
  background-color: ${NupesColors.PURPLE};
  display: inline-block;
  padding: 0 16px;
  margin: 0 16px;
`;

export const LogoGenerationsStories = () => (
  <ThemeProvider>
    <h1>Logo Génération·s</h1>
    <LogoGenerations width="500px" />
    <h1>Logo Génération·s uni</h1>
    <LogoGenerations width="500px" color={NupesColors.PURPLE} />
    <PurpleBackground>
      <LogoGenerations width="500px" color={OtherColors.WHITE} />
    </PurpleBackground>
  </ThemeProvider>
);
