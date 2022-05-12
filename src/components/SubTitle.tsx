import React from "react";
import styled from "styled-components";

export interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitleElement = styled.h2`
  font-family: "Acumin Pro Condensed Black";
`;

export const SubTitle: React.FC<SubTitleProps> = ({ children, ...props }) => (
  <SubTitleElement {...props}>{children}</SubTitleElement>
);
