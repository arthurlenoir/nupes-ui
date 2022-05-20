import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { transitions } from "../../stylesheet";

interface GaugeProps {
  target: number;
  value: number;
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`;

interface GaugeContainerProps {
  percent: number;
}

const GaugeContainer = styled.div<GaugeContainerProps>`
  height: 6px;
  flex: 1;
  border-radius: 3px;
  background-color: #eee;
  margin: 3px 16px 0 0;
  &:before {
    content: "";
    display: block;
    height: 100%;
    border-radius: 3px;
    transition: width ${transitions.default} 200ms;
  }
  ${({ theme, percent }) => css`
    &:before {
      width: ${percent}%;
      background-color: ${theme.colors.primary.background};
    }
  `}
`;

const PercentLabel = styled.div`
  font-family: "Acumin Pro Condensed Black";
  line-height: 1em;
`;

export const Gauge: React.FC<GaugeProps> = ({ target, value }) => {
  const [gaugePercent, setGaugePercent] = useState<number>(0);
  const percent = Math.round((100 * value) / target);
  useEffect(() => {
    setGaugePercent(Math.max(0, Math.min(100, percent)));
  }, [percent, setGaugePercent]);

  return (
    <MainContainer>
      <GaugeContainer percent={gaugePercent}></GaugeContainer>
      <PercentLabel>{percent} %</PercentLabel>
    </MainContainer>
  );
};
