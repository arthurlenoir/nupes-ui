import styled, { css } from "styled-components";
import { OtherColors } from "../stylesheet";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "big";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = styled.button<ButtonProps>`
  height: 40px;
  padding: 2px 16px 0;
  white-space: nowrap;
  border: 1px solid ${OtherColors.BLACK};
  outline: 0;
  cursor: pointer;
  background-color: ${OtherColors.WHITE};
  color: ${OtherColors.BLACK};
  font-family: "Acumin Pro";
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.primary.background};
      color: ${theme.colors.primary.foreground};
      border: ${theme.colors.primary.background};
    `}
  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.secondary.background};
      color: ${theme.colors.secondary.foreground};
      border: ${theme.colors.secondary.foreground};
    `}
    ${({ size }) =>
    size === "big" &&
    css`
      height: 56px;
      padding: 0 24px;
      font-size: 22px;
    `}
    ${({ size }) =>
    size === "small" &&
    css`
      height: 28px;
      font-size: 14px;
      padding: 0 12px;
    `}
`;
