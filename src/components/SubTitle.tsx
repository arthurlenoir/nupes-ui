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
  font-family: "Acumin Pro Condensed Black";
  font-weight: normal;
`;

const StyledHighlight = styled(Highlight)`
  font-weight: normal;
`;

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
