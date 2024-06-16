import React from "react";
import styled, { css } from "styled-components";
import { Highlight } from "../Highlight";
import { SubTitle } from "../SubTitle";
import { Text } from "../Text";
import { CalendarItem } from "./types";

interface Props {
  event: CalendarItem;
  preview?: boolean;
  link?: string;
}

interface ContainerProps {
  preview?: boolean;
}

const EventContainer = styled.div<ContainerProps>`
  margin: 0 8px 16px;
  border: 1px solid #eeeeee;
  padding: 16px 12px;
  min-width: 300px;
  flex: 1 1 100%;
  color: inherit;
  text-decoration: none;
  &:hover,
  &:visited {
    color: inherit;
    text-decoration: none;
  }
  ${({ theme }) => css`
    border-color: ${theme.colors.secondary.background};
  `}
  ${({ preview }) =>
    preview &&
    css`
      flex: 1 1 40%;
    `}
`;

const EventSummary = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 16px;
  white-space: nowrap;
  font-size: 18px;
`;

const EventTitle = styled(SubTitle)`
  flex: 1;
  white-space: normal;
  font-family: "Barlow";
font-weight: 500;
  margin: 0;
`;

const DateContainer = styled(Text)`
  margin: 4px 8px 0 0;
  line-height: 1.2em;
`;

const TimeContainer = styled(Text)`
  margin: 5px 8px 0 0;
  font-family: "Barlow";
font-weight: 500;
`;

const EventLocation = styled(Text)`
  margin-bottom: 2px;
  font-style: italic;
  line-height: 1.2em;
`;

const EventDescription = styled(Text)`
  margin: 16px 0 2px;
  line-height: 1.2em;
`;

const StyledHighlight = styled(Highlight)`
  font-weight: normal;
`;

const CalendarEvent: React.FC<Props> = ({ event, link, preview = false }) => {
  const start = new Date(Date.parse(event.start.dateTime));
  const end = new Date(Date.parse(event.end.dateTime));
  const location = event.location
    ? event.location.replace(/, France$/, "")
    : "";
  return (
    <EventContainer
      key={event.start.dateTime}
      preview={preview}
      href={preview ? link : undefined}
      as={preview && link ? "a" : undefined}
    >
      <EventTitle>{event.summary}</EventTitle>
      <EventSummary>
        <DateContainer>
          <StyledHighlight small>
            {start.toLocaleDateString(undefined, {
              day: "2-digit",
              month: "long",
            })}
          </StyledHighlight>
        </DateContainer>
        <TimeContainer>
          {start.toLocaleTimeString(undefined, { timeStyle: "short" })} -{" "}
          {end.toLocaleTimeString(undefined, { timeStyle: "short" })}
        </TimeContainer>
      </EventSummary>
      {location && <EventLocation>{location}</EventLocation>}
      {!preview && event.description && (
        <EventDescription>
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </EventDescription>
      )}
    </EventContainer>
  );
};

export default CalendarEvent;
