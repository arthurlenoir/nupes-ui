import "styled-components";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  NupesColors,
  Colors,
  getComplentaryColor,
  LightNupesColors,
  getLightColor,
} from "../stylesheet";
import { GlobalStyle } from "../GlobalStyle";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        background: NupesColors;
        foreground: Colors;
        lightBackground: LightNupesColors;
      };
      secondary: {
        background: NupesColors;
        foreground: Colors;
        lightBackground: LightNupesColors;
      };
    };
  }
}

export type ThemeProviderProps = {
  children: React.ReactNode;
  primary?: NupesColors;
  secondary?: NupesColors;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  primary = NupesColors.PURPLE,
  secondary = NupesColors.GREEN,
  children,
}) => (
  <StyledThemeProvider
    theme={{
      colors: {
        primary: {
          background: primary,
          foreground: getComplentaryColor(primary),
          lightBackground: getLightColor(primary),
        },
        secondary: {
          background: secondary,
          foreground: getComplentaryColor(secondary),
          lightBackground: getLightColor(secondary),
        },
      },
    }}
  >
    {children}
    <GlobalStyle />
  </StyledThemeProvider>
);

export default ThemeProvider;
