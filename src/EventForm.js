import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const EventForm = ({ onEventSubmit }) => {
  const [events, setEvents] = useState([]);

  return (
    <div>
      <h2>Create Event</h2>
      <Formik
        initialValues={{ title: '', startTime: '', endTime: '' }}
        onSubmit={(values, { resetForm }) => {
          const event = {
            title: values.title,
            start: new Date(values.startTime),
            end: new Date(values.endTime),
          };

          setEvents([...events, event]);
          onEventSubmit(event);
          resetForm();
        }}
      >
        {() => (
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="startTime">Start Time:</label>
            <Field type="datetime-local" id="startTime" name="startTime" />
            <ErrorMessage name="startTime" component="div" />
          </div>

          <div>
            <label htmlFor="endTime">End Time:</label>
            <Field type="datetime-local" id="endTime" name="endTime" />
            <ErrorMessage name="endTime" component="div" />
          </div>

          <button type="submit">Create Event</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
