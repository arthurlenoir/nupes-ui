import React, { useCallback, useEffect, useState } from "react";
import CalendarEvent from "./CalendarEvent";
import { listUpcomingEvents, loadGoogleApi } from "./GoogleCalendar";
import { Text } from "../Text";
import styled from "styled-components";
import { CalendarItem } from "./types";

interface Props {
  calendarId: string;
  googleApiKey: string;
  limit?: number;
  preview?: boolean;
  loadingText?: React.ReactNode;
  noEventsText?: React.ReactNode;
  link?: string;
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
  link,
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
        link={link}
      />
    ),
    [preview, link]
  );

  if (!events) return <Text>{loadingText || "Chargement en cours..."}</Text>;
  if (events.length === 0)
    return <Text>{noEventsText || "Rien à l'horizon."}</Text>;

  return <EventsContainer>{events.map(renderCalendarEvent)}</EventsContainer>;
};
