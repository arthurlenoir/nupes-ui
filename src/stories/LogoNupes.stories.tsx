import React from "react";
import { ComponentMeta } from "@storybook/react";
import { NupesLogo } from "../components/NupesLogo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Graphics/Logo",
  component: NupesLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NupesLogo>;

export const LogoStories = () => (
  <div>
    <h1>Logo</h1>
    <NupesLogo height="200px" />
  </div>
);
