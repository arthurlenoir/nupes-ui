import React from "react";
import styled from "styled-components";
import { Colors } from "../../stylesheet";
import { LogoNupes } from "./LogoNupes";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: Colors;
}

const NupesLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoNupesWithText: React.FC<Props> = (props) => (
  <NupesLogoContainer>
    <LogoNupes {...props} />
  </NupesLogoContainer>
);
