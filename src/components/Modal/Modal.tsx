import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { OtherColors, transitions } from "../../stylesheet";

interface ModalProps {
  visible: boolean;
  close: () => void;
  children?: React.ReactNode;
}

interface ModalContainerProps {
  visible: boolean;
}
const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 50%;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 0;
  transition: background-color ${transitions.default},
    z-index ${transitions.delayed};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${({ visible }) =>
    visible &&
    css`
      transition: background-color ${transitions.default};
      height: 100%;
      background-color: rgba(0, 0, 0, 0.55);
      padding: 16px;
      z-index: 100;
      top: 0;
    `}
`;

const ModalContent = styled.aside<ModalContainerProps>`
  margin: 0;
  padding: 16px;
  background-color: ${OtherColors.WHITE};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 100%;
  display: block;
  opacity: 0;
  transform: scale(0);
  transition: transform ${transitions.default}, opacity ${transitions.default};
  box-sizing: border-box;
  ${({ visible }) =>
    visible &&
    css`
      transform: scale(1);
      opacity: 1;
      transition: transform ${transitions.default},
        opacity ${transitions.default};
    `}
`;

const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

export const Modal: React.FC<ModalProps> = ({ visible, close, children }) => {
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      stopPropagation(e);
      close();
    },
    [close]
  );
  return (
    <ModalContainer onClick={onClick} visible={visible}>
      <ModalContent onClick={stopPropagation} visible={visible}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};
