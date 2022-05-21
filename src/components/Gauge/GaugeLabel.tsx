import React from "react";
import styled from "styled-components";
import { Highlight } from "../Highlight";
import { renderMoney } from "../Money";
import { Text } from "../Text";

interface Props {
  value: number;
  target: number;
}

const StyledText = styled(Text)`
  line-height: 1em;
  margin: 0;
`;

export const GaugeLabel: React.FC<Props> = ({ value, target }) => (
  <StyledText>
    <Highlight small>{renderMoney(value)}</Highlight>
    <span> sur {renderMoney(target)}</span>
  </StyledText>
);
