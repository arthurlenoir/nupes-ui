import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Gauge } from "../components/Gauge";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components",
  component: Gauge,
};

const GaugeContainer = styled.div`
  max-width: 400px;
`;

export const GaugeStories = () => {
  return (
    <ThemeProvider>
      <h1>Gauge</h1>
      <GaugeContainer>
        <Gauge value={10} target={100} />
        <Gauge value={30} target={100} />
        <Gauge value={80} target={100} />
        <Gauge value={250} target={100} />
      </GaugeContainer>
    </ThemeProvider>
  );
};
