import React from "react";
import styled from "styled-components";

export interface TitleProps {
  children: React.ReactNode;
}

const TitleElement = styled.h1`
  font-family: "Apotek Comp Black";
  text-transform: uppercase;
`;

export const Title: React.FC<TitleProps> = ({ children, ...props }) => (
  <TitleElement {...props}>{children}</TitleElement>
);
