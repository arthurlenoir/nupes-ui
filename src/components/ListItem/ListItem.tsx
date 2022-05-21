import React from "react";
import styled, { useTheme } from "styled-components";
import { ArrowIcon } from "../Icons";
import { Text } from "../Text";

const ListItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 16px;
  ul {
    margin: 16px 0 16px 16px;
  }
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin: 2px 4px 0 0;
  flex: 0 0 12px;
`;

const StyledText = styled(Text)`
  margin: 0;
  line-height: 1.2em;
`;

type Props = React.HTMLAttributes<HTMLLIElement>;

export const ListItem: React.FC<Props> = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <ListItemContainer {...props}>
      <StyledArrowIcon color={theme.colors.primary.background} />
      <StyledText>{children}</StyledText>
    </ListItemContainer>
  );
};
