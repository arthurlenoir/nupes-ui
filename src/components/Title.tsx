import React from "react";
import styled, { css } from "styled-components";
import { Highlight, HighlightVariant } from "./Highlight";

export type TitleVariant =
  | "primary"
  | "secondary"
  | "light-primary"
  | "light-secondary";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: TitleVariant;
}

const titleVariantToHighlightVariant: Record<
  TitleVariant,
  HighlightVariant | undefined
> = {
  primary: undefined,
  secondary: undefined,
  "light-primary": "primary",
  "light-secondary": "secondary",
};

const TitleElement = styled.h1<{ variant?: TitleVariant }>`
  font-family: "Barlow";
  font-weight: 900;
  text-transform: uppercase;
  padding: 8px 16px;
  margin: 80px -16px 16px;
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

const StyledHighlight = styled(Highlight)``;

export const Title: React.FC<TitleProps> = ({
  children,
  variant,
  ...props
}) => {
  const highlightVariant = variant && titleVariantToHighlightVariant[variant];
  return (
    <TitleElement variant={variant} {...props}>
      {highlightVariant ? (
        <StyledHighlight variant={highlightVariant}>{children}</StyledHighlight>
      ) : (
        children
      )}
    </TitleElement>
  );
};
