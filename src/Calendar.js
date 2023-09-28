import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EventForm from './EventForm'; 

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleEventSubmit = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <EventForm onEventSubmit={handleEventSubmit} /> 
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Calendar;
