import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TiktokIcon,
  TwitterIcon,
} from "../components/Icons";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics",
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const IconsStories = () => (
  <ThemeProvider>
    <h1>Social network icons</h1>
    <Container>
      <FacebookIcon />
      <InstagramIcon />
      <TelegramIcon />
      <TiktokIcon />
      <TwitterIcon />
    </Container>
    <h1>Same smaller</h1>
    <Container>
      <FacebookIcon width={18} />
      <InstagramIcon width={18} />
      <TelegramIcon width={18} />
      <TiktokIcon width={18} />
      <TwitterIcon width={18} />
    </Container>
  </ThemeProvider>
);
