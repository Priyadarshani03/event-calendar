import { useState, useEffect } from 'react';

export const useCalendarLogic = () => {
  const [events, setEvents] = useState(() => {
    // Load events from localStorage or initialize empty events
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : {};
  });
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (date, event) => {
    const eventDate = date.toDateString();
    const newEvents = { ...events, [eventDate]: [...(events[eventDate] || []), event] };
    setEvents(newEvents);
  };

  const deleteEvent = (date, eventIndex) => {
    const eventDate = date.toDateString();
    const updatedEvents = events[eventDate].filter((_, index) => index !== eventIndex);
    setEvents({ ...events, [eventDate]: updatedEvents });
  };

  const editEvent = (date, eventIndex, updatedEvent) => {
    const eventDate = date.toDateString();
    const updatedEvents = events[eventDate].map((event, index) =>
      index === eventIndex ? updatedEvent : event
    );
    setEvents({ ...events, [eventDate]: updatedEvents });
  };

  return { events, selectedDate, setSelectedDate, addEvent, deleteEvent, editEvent };
};
