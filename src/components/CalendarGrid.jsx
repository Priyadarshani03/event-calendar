import React, { useState, useEffect } from "react";
import Day from "./Day";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths } from "date-fns";

const CalendarGrid = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem("events")) || {});

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const renderDays = () => {
    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfWeek(endOfMonth(currentDate));

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days.map((date) => (
      <Day
        key={date}
        date={date}
        currentDate={currentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        events={events}
        setEvents={setEvents}
      />
    ));
  };

  return (
    <div className="calendar">
      <header>
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <div className="days-grid">{renderDays()}</div>
    </div>
  );
};

export default CalendarGrid;
