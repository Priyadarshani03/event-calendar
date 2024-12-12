import React, { useState } from 'react';
import Calendar from './components/CalendarGrid';
import EventModal from './components/EventModal';
import './App.css';  // Import the CSS here

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <Calendar setSelectedDate={setSelectedDate} />
      {selectedDate && (
        <EventModal
          date={selectedDate}
          closeModal={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
}

export default App;
