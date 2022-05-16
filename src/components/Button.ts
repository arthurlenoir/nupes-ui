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
  padding: 0 16px;
  border-radius: 20px;
  white-space: nowrap;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: ${OtherColors.WHITE};
  color: ${OtherColors.BLACK};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.15);
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
    `}
  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.secondary.background};
      color: ${theme.colors.secondary.foreground};
    `}
    ${({ size }) =>
    size === "big" &&
    css`
      height: 56px;
      border-radius: 28px;
      padding: 0 24px;
      font-size: 22px;
    `}
    ${({ size }) =>
    size === "small" &&
    css`
      height: 28px;
      border-radius: 14px;
      font-size: 14px;
      padding: 0 12px;
    `}
`;
