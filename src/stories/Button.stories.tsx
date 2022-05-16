import React from "react";
import { Button } from "../components/Button";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components",
  component: Button,
};

export const ButtonStories = () => (
  <ThemeProvider>
    <h1>Simple button</h1>
    <Button>button</Button>
    <h1>Primary button</h1>
    <Button variant="primary">button</Button>
    <h1>Secondary button</h1>
    <Button variant="secondary">button</Button>
    <h1>Primary big button</h1>
    <Button variant="primary" size="big">
      big button
    </Button>
    <h1>Small secondary button</h1>
    <Button variant="secondary" size="small">
      small button
    </Button>
  </ThemeProvider>
);
