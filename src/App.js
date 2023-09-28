import React from 'react';
import EventForm from './EventForm';
import Calendar from './Calendar';

const App = () => {
  const handleEventSubmit = (event) => {
    // Handle event submission here, e.g., add it to the calendar.
    // You can send this data to an API or handle it as per your requirements.
    console.log('Submitted event:', event);
  };

  return (
    <div>
      <EventForm onSubmit={handleEventSubmit} />
      <Calendar />
    </div>
  );
};

export default App;
