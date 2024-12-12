import React from "react";

const DayCell = ({ day, isSelected, events, onClick, onEditEvent, onDeleteEvent }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all ${
        isSelected ? "bg-blue-500 text-white" : "bg-white"
      } hover:bg-gray-200 shadow-md flex flex-col justify-between`}
    >
      <div className="font-bold">{day.getDate()}</div>
      {events.length > 0 && (
        <div className="text-sm text-gray-600 mt-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                onEditEvent(day, index);
              }}
            >
              <div className="font-medium">{event.name}</div>
              <div className="text-xs">{event.startTime} - {event.endTime}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DayCell;
