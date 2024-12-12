import React from "react";
import { format } from 'date-fns';


const EventModal = ({ date, events, setEvents, closeModal }) => {
  const formattedDate = format(date, "yyyy-MM-dd");
  const dayEvents = events[formattedDate] || [];

  const deleteEvent = (index) => {
    const updatedEvents = dayEvents.filter((_, i) => i !== index);
    setEvents({ ...events, [formattedDate]: updatedEvents });
  };

  return (
    <div className="modal">
      <h3>Events on {formattedDate}</h3>
      <ul>
        {dayEvents.map((event, index) => (
          <li key={index}>
            {event.name}
            <button onClick={() => deleteEvent(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default EventModal;
