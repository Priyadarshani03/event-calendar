import React from "react";
import { format, isSameDay, isSameMonth } from "date-fns";

const Day = ({ date, currentDate, selectedDate, setSelectedDate, events, setEvents }) => {
  const isToday = isSameDay(date, new Date());
  const isSelected = isSameDay(date, selectedDate);
  const isInCurrentMonth = isSameMonth(date, currentDate);

  const handleAddEvent = () => {
    const eventName = prompt("Enter event name:");
    if (!eventName) return;

    const newEvent = { name: eventName, date: format(date, "yyyy-MM-dd") };
    const existingEvents = events[format(date, "yyyy-MM-dd")] || [];
    setEvents({ ...events, [format(date, "yyyy-MM-dd")]: [...existingEvents, newEvent] });
  };

  return (
    <div
      className={`day ${isToday ? "today" : ""} ${isSelected ? "selected" : ""} ${!isInCurrentMonth ? "outside" : ""}`}
      onClick={() => setSelectedDate(date)}
      onDoubleClick={handleAddEvent}
    >
      <span>{format(date, "d")}</span>
      {events[format(date, "yyyy-MM-dd")]?.map((event, idx) => (
        <div key={idx} className="event">
          {event.name}
        </div>
      ))}
    </div>
  );
};

export default Day;
