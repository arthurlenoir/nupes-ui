import React from "react";
import styled from "styled-components";

export interface TextProps {
  children: React.ReactNode;
}

const TextElement = styled.p`
  font-family: "Acumin Pro";
`;

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <TextElement {...props}>{children}</TextElement>
);
