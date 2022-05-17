import styled, { css } from "styled-components";

export type HighlightVariant = "primary" | "secondary";

interface HighlightProps {
  variant?: HighlightVariant;
}

export const Highlight = styled.span<HighlightProps>`
  font-weight: bold;
`;
