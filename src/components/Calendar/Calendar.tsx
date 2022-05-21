import React, { useCallback, useEffect, useState } from "react";
import CalendarEvent from "./CalendarEvent";
import {
  CalendarItem,
  listUpcomingEvents,
  loadGoogleApi,
} from "./GoogleCalendar";
import { Text } from "../Text";
import styled from "styled-components";

interface Props {
  calendarId: string;
  googleApiKey: string;
  limit?: number;
  preview?: boolean;
  loadingText?: React.ReactNode;
  noEventsText?: React.ReactNode;
}

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -8px;
  flex-wrap: wrap;
`;

export const Calendar: React.FC<Props> = ({
  calendarId,
  googleApiKey,
  preview = false,
  limit = 4,
  loadingText,
  noEventsText,
}) => {
  const [events, setEvents] = useState<CalendarItem[]>();
  useEffect(() => {
    loadGoogleApi(googleApiKey).then(async () => {
      const calendarEvents = await listUpcomingEvents(calendarId, limit);
      setEvents(calendarEvents.result.items);
    });
  }, [setEvents, calendarId, limit]);

  const renderCalendarEvent = useCallback(
    (event: CalendarItem) => (
      <CalendarEvent
        key={event.start.dateTime}
        event={event}
        preview={preview}
      />
    ),
    [preview]
  );

  if (!events) return <Text>{loadingText || "Chargement en cours..."}</Text>;
  if (!noEventsText) return <Text>{noEventsText || "Rien à l'horizon."}</Text>;

  return <EventsContainer>{events.map(renderCalendarEvent)}</EventsContainer>;
};
