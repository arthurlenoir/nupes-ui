import React from "react";
import styled from "styled-components";
import { Highlight } from "./Highlight";

export type SubTitleVariant = "primary" | "secondary";

export interface SubTitleProps {
  variant?: SubTitleVariant;
  children: React.ReactNode;
}

const SubTitleElement = styled.h2`
  font-family: "Acumin Pro Condensed Black";
`;

export const SubTitle: React.FC<SubTitleProps> = ({
  variant,
  children,
  ...props
}) => (
  <SubTitleElement {...props}>
    {variant ? <Highlight variant={variant}>{children}</Highlight> : children}
  </SubTitleElement>
);
