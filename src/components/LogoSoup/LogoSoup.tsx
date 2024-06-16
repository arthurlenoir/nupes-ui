import {
  LogoLFI,
  LogoPCF,
  LogoND,
  LogoPS,
  LogoGenerations,
  LogoConfPaysanne,
  LogoGenerationE,
  LogoREV,
} from "../Logos";
import React from "react";
import styled from "styled-components";
import { LogoEcolo } from "../Logos/LogoEcolo";

enum PartyNames {
  LFI = "LFI",
  EELV = "EELV",
  PS = "PS",
  PCF = "PCF",
  Generations = "Generations",
  GenerationE = "Generation E",
  ND = "ND",
  CP = "ConfPaysanne",
  REV = "REV",
}

interface Props {
  logos?: PartyNames[];
}

const DEFAULT_LOGOS: PartyNames[] = [
  PartyNames.EELV,
  PartyNames.LFI,
  PartyNames.PS,
  PartyNames.PCF,
  PartyNames.GenerationE,
  PartyNames.Generations,
  PartyNames.ND,
  PartyNames.REV,
];

const LogoPerName: Record<PartyNames, React.FC> = {
  [PartyNames.LFI]: () => <LogoLFI height={70} />,
  [PartyNames.EELV]: () => <LogoEcolo height={70} />,
  [PartyNames.PS]: () => <LogoPS height={70} />,
  [PartyNames.PCF]: () => <LogoPCF height={70} />,
  [PartyNames.GenerationE]: () => <LogoGenerationE width={150} />,
  [PartyNames.Generations]: () => <LogoGenerations width={150} />,
  [PartyNames.ND]: () => <LogoND height={70} />,
  [PartyNames.CP]: () => <LogoConfPaysanne height={70} />,
  [PartyNames.REV]: () => <LogoREV height={80} />,
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
