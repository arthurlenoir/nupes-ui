import styled, { css } from "styled-components";
import { OtherColors } from "../stylesheet";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "primary-light"
  | "secondary-light";
export type ButtonSize = "small" | "big";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = styled.button<ButtonProps>`
  height: 40px;
  padding: 4px 16px 0;
  white-space: nowrap;
  border: 2px solid ${OtherColors.BLACK};
  border-radius: 1px;
  outline: 0;
  cursor: pointer;
  background-color: ${OtherColors.WHITE};
  color: ${OtherColors.BLACK};
  font-family: "Barlow";
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.85;
  }
  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.primary.background};
      color: ${theme.colors.primary.foreground};
      border-color: ${theme.colors.primary.background};
      &:hover {
        color: ${theme.colors.primary.foreground};
      }
    `}
  ${({ theme, variant }) =>
    variant === "primary-light" &&
    css`
      background-color: ${OtherColors.WHITE};
      color: ${theme.colors.primary.background};
      border-color: ${theme.colors.primary.background};
      &:hover {
        color: ${theme.colors.primary.background};
      }
    `}
  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.secondary.background};
      color: ${theme.colors.secondary.foreground};
      border-color: ${theme.colors.secondary.background};
      &:hover {
        color: ${theme.colors.secondary.foreground};
      }
    `}
  ${({ theme, variant }) =>
    variant === "secondary-light" &&
    css`
      background-color: ${OtherColors.WHITE};
      color: ${theme.colors.secondary.background};
      border-color: ${theme.colors.secondary.background};
      &:hover {
        color: ${theme.colors.secondary.background};
      }
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
