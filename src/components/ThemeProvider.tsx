import "styled-components";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { NupesColors, Colors, getComplentaryColor } from "../stylesheet";
import { GlobalStyle } from "../GlobalStyle";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        background: NupesColors;
        foreground: Colors;
      };
      secondary: {
        background: NupesColors;
        foreground: Colors;
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
        },
        secondary: {
          background: secondary,
          foreground: getComplentaryColor(secondary),
        },
      },
    }}
  >
    {children}
    <GlobalStyle />
  </StyledThemeProvider>
);

export default ThemeProvider;
