import React from "react";
import styled from "styled-components";
import { Highlight } from "./Highlight";

export type SubTitleVariant = "primary" | "secondary";

export interface SubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: SubTitleVariant;
  children: React.ReactNode;
}

const SubTitleElement = styled.h2`
  font-family: "Barlow";
  font-weight: 500;
`;

const StyledHighlight = styled(Highlight)``;

export const SubTitle: React.FC<SubTitleProps> = ({
  variant,
  children,
  ...props
}) => (
  <SubTitleElement {...props}>
    {variant ? (
      <StyledHighlight variant={variant}>{children}</StyledHighlight>
    ) : (
      children
    )}
  </SubTitleElement>
);
