import {
  LogoEELV,
  LogoLFI,
  LogoPCF,
  LogoND,
  LogoPS,
  LogoGenerations,
  LogoConfPaysanne,
} from "../Logos";
import React from "react";
import styled from "styled-components";

enum PartyNames {
  LFI = "LFI",
  EELV = "EELV",
  PS = "PS",
  PCF = "PCF",
  Generations = "Generations",
  ND = "ND",
  CP = "ConfPaysanne",
}

interface Props {
  logos?: PartyNames[];
}

const DEFAULT_LOGOS: PartyNames[] = [
  PartyNames.LFI,
  PartyNames.EELV,
  PartyNames.PS,
  PartyNames.PCF,
  PartyNames.Generations,
  PartyNames.ND,
];

const LogoPerName: Record<PartyNames, React.FC> = {
  [PartyNames.LFI]: () => <LogoLFI height={70} />,
  [PartyNames.EELV]: () => <LogoEELV height={80} />,
  [PartyNames.PS]: () => <LogoPS height={70} />,
  [PartyNames.PCF]: () => <LogoPCF height={70} />,
  [PartyNames.Generations]: () => <LogoGenerations width={150} />,
  [PartyNames.ND]: () => <LogoND height={70} />,
  [PartyNames.CP]: () => <LogoConfPaysanne height={70} />,
};

const LogosSoupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
  gap: 24px 54px;
  width: 100%;
`;
const LogoContainer = styled.div`
  flex: 1 0 150px;
  text-align: center;
`;

const renderLogo = (logoName: PartyNames, index: number) => {
  const Logo = LogoPerName[logoName];
  return (
    <LogoContainer key={index}>
      <Logo />
    </LogoContainer>
  );
};

export const LogoSoup: React.FC<Props> = ({ logos = DEFAULT_LOGOS }) => (
  <LogosSoupContainer>{logos.map(renderLogo)}</LogosSoupContainer>
);
