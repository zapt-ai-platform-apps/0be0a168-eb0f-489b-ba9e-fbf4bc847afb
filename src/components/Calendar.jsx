import React, { useState } from 'react';
import CalendarNavigation from './CalendarNavigation';
import { formatDate } from '../utils/dateUtils';

const Calendar = ({ onBack }) => {
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const selectedDate = formatDate(currentDate);
  const [eventText, setEventText] = useState("");
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    if (eventText.trim() !== "") {
      const newEvent = { date: selectedDate, text: eventText.trim() };
      setEvents([...events, newEvent]);
      console.log("Event added on", selectedDate, ":", eventText);
      setEventText("");
    }
  };

  const eventsForSelectedDate = events.filter(event => event.date === selectedDate);

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    console.log("Switched to previous month:", newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    console.log("Switched to next month:", newDate);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onBack}
        className="self-start mb-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded cursor-pointer"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Calendar Mode</h2>
      <CalendarNavigation
        currentDate={currentDate}
        onPrevious={goToPreviousMonth}
        onNext={goToNextMonth}
      />
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Add event description..."
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          className="box-border p-2 border border-gray-300 rounded w-64"
        />
        <button
          onClick={addEvent}
          className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded cursor-pointer"
        >
          Add Event
        </button>
      </div>
      <div className="w-full max-w-md">
        <h3 className="font-bold mb-2 dark:text-white">Events on {selectedDate}:</h3>
        {eventsForSelectedDate.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No events for this date.</p>
        ) : (
          <ul className="list-disc list-inside">
            {eventsForSelectedDate.map((event, index) => (
              <li key={index} className="dark:text-white">{event.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calendar;