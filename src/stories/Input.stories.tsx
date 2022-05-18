import React, { useCallback, useState } from "react";
import { Input } from "../components/Input";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components",
  component: Input,
};

export const InputStories = () => {
  const [name, setName] = useState<string>("");
  const onNameChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value);
    },
    [setName]
  );
  const [firstName, setFirstName] = useState<string>("");
  const onFirstNameChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setFirstName(e.currentTarget.value);
    },
    [setFirstName]
  );
  return (
    <ThemeProvider>
      <h1>Simple input text</h1>
      <Input label="Prénom" value={firstName} onChange={onFirstNameChange} />
      <Input label="Nom" value={name} onChange={onNameChange} />
    </ThemeProvider>
  );
};
