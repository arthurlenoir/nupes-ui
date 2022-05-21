import React from "react";
import styled, { css } from "styled-components";

interface HeaderContainerProps {
  backgroundImage: string;
}

const HeaderContainer = styled.picture<HeaderContainerProps>`
  display: flex;
  height: 40vh;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 -1rem 24px;
  ${({ backgroundImage }) =>
    css`
      background-image: url("${backgroundImage}");
    `}
  @media only screen and (max-width: 996px) {
    height: 25vh;
  }
`;

const HeaderImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

interface SourceSet {
  srcSet: string;
  type: string;
}

interface Props {
  src: string;
  backgroundSrc: string;
  alt?: string;
  sources?: SourceSet[];
}

const renderSources = (source: SourceSet, i: number) => (
  <source key={i} srcSet={source.srcSet} type={source.type} />
);

export const Header: React.FC<Props> = ({
  src,
  backgroundSrc,
  alt,
  sources,
}) => {
  return (
    <HeaderContainer backgroundImage={backgroundSrc}>
      {sources?.map(renderSources)}
      <HeaderImage src={src} alt={alt} />
    </HeaderContainer>
  );
};
