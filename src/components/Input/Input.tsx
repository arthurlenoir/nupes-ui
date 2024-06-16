import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { transitions } from "../../stylesheet";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

const Label = styled.label<{ isFocus?: boolean }>`
  font-family: "Barlow";
  font-weight: 400;
  font-size: 18px;
  border-bottom: 1px solid black;
  padding: 8px 0 0;
  height: 45px;
  box-sizing: border-box;
  margin: 8px 0 16px;
  display: block;
  width: 100%;
  position: relative;
  transition: border ${transitions.fast};
  ${({ theme }) => css`
    border-color: ${theme.colors.primary.lightBackground};
    &:hover {
      border-width: 3px;
      border-color: ${theme.colors.primary.background};
    }
  `}
  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.primary.background};
    `}
`;

enum LabelPositions {
  PLACEHOLDER,
  TOP,
}
interface LabelTextProps {
  position: LabelPositions;
}
const LabelText = styled.div<LabelTextProps>`
  position: absolute;
  top: 16px;
  left: 0;
  cursor: text;
  transition: font-size ${transitions.fast}, top ${transitions.fast},
    opacity ${transitions.fast};
  ${({ position }) =>
    position === LabelPositions.TOP &&
    css`
      font-size: 14px;
      top: -4px;
      opacity: 0.75;
    `}
`;

const InputField = styled.input`
  display: block;
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px 0 4px;
  margin: 0;
  font-family: "Barlow";
  font-weight: 400;
  font-size: 18px;
  background: none;
`;

export const Input: React.FC<InputProps> = ({
  className,
  label,
  value,
  onFocus,
  onBlur,
  placeholder,
  ...props
}) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(!value);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  useEffect(() => {
    const newValue = !value;
    if (newValue !== isEmpty) {
      setIsEmpty(newValue);
    }
  }, [setIsEmpty, isEmpty, value]);
  const onInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);
      onFocus && onFocus(e);
    },
    [onFocus, setIsFocus]
  );
  const onInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(false);
      onBlur && onBlur(e);
    },
    [onBlur, setIsFocus]
  );
  const labelPosition =
    isEmpty && !isFocus ? LabelPositions.PLACEHOLDER : LabelPositions.TOP;
  return (
    <Label className={className} isFocus={isFocus}>
      <LabelText position={labelPosition}>{label}</LabelText>
      <InputField
        value={value}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        placeholder={
          labelPosition === LabelPositions.PLACEHOLDER ? undefined : placeholder
        }
        {...props}
      />
    </Label>
  );
};
