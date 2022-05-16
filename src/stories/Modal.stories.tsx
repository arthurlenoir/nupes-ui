import React, { useCallback, useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import ThemeProvider from "../components/ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components",
  component: Modal,
};

export const ModalStories = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const open = useCallback(() => setVisible(true), [setVisible]);
  const close = useCallback(() => setVisible(false), [setVisible]);
  return (
    <ThemeProvider>
      <h1>Modal</h1>
      <Button onClick={open}>click to open modal</Button>
      <Modal visible={visible} close={close}>
        <Title variant="secondary">Modal title</Title>
        <Text>Modal text</Text>
      </Modal>
    </ThemeProvider>
  );
};
