import React from "react";
import styled from "styled-components";
import { LogoNupesWithText } from "./Logos";

const StyledLogoContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
  display: block;
`;

type Props = React.HTMLAttributes<HTMLDivElement>;

export const NupesLogo: React.FC<Props> = (props) => {
  return (
    <StyledLogoContainer {...props}>
      <LogoNupesWithText width="100%" />
    </StyledLogoContainer>
  );
};
