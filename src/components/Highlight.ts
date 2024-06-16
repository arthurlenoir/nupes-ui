import styled, { css } from "styled-components";

export type HighlightVariant = "primary" | "secondary";

interface HighlightProps {
  variant?: HighlightVariant;
  small?: boolean;
}

export const Highlight = styled.span<HighlightProps>`
  position: relative;
  font-weight: bold;
  font-family: "Barlow";
  font-weight: 500;
  white-space: nowrap;
  &:before {
    content: "";
    position: absolute;
    bottom: 0.15em;
    height: 0.35em;
    left: -16px;
    right: -16px;
    top: auto;
    transform: scale(1) skew(-8deg);
    z-index: -1;
    ${({ theme, variant }) => css`
      background: ${variant === "secondary"
        ? theme.colors.secondary.lightBackground
        : theme.colors.primary.lightBackground};
    `}
    ${({ small }) =>
      small &&
      css`
        left: 0;
        right: 0;
      `}
  }
`;
