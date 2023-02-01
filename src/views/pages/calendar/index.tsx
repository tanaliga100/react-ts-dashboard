import React, { useState } from "react";

import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; //
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Typography, useTheme } from "@mui/material";

import { Box, List, ListItem, ListItemText } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../shared/Header";

type Props = {
  id: String;
  title: String;
  start: String;
  end: String;
  allDay: Boolean;
};

const Calendar = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title");
    const calendarAPI = selected.view.calendar;
    calendarAPI.unSelect();

    if (title) {
      calendarAPI.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subTitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR  */}
        <Box
          flex="1 1 20%"
          height="60vh"
          p="15px"
          borderRadius="4px"
          sx={{
            backgroundColor: { backgroundColor: colors.primary[400] },
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map(
              (event: { id: string; title: string; start: string }) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
        {/* CALENDAR  */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="60vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: any) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
