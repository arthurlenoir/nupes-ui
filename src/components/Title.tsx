import React from "react";
import styled, { css } from "styled-components";

export type TitleVariant = "primary" | "secondary";

export interface TitleProps {
  children: React.ReactNode;
  variant?: TitleVariant;
}

const TitleElement = styled.h1<{ variant?: TitleVariant }>`
  font-family: "Apotek Comp Black";
  text-transform: uppercase;
  padding: 8px 16px;
  margin: 8px -16px 16px;
  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      color: ${theme.colors.primary.foreground};
      background-color: ${theme.colors.primary.background};
    `}
  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      color: ${theme.colors.secondary.foreground};
      background-color: ${theme.colors.secondary.background};
    `}
`;

export const Title: React.FC<TitleProps> = ({ children, ...props }) => (
  <TitleElement {...props}>{children}</TitleElement>
);
