import React from "react";
import styled from "styled-components";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const TextElement = styled.p`
  font-family: "Barlow";
font-weight: 400;
  line-height: 1.2em;
`;

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <TextElement {...props}>{children}</TextElement>
);
