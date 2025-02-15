import React, { useState } from 'react';
import CalendarNavigation from './CalendarNavigation';
import { formatDate } from '../utils/dateUtils';

const Calendar = ({ onBack }) => {
  const today = new Date();
  const initialDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDay, setSelectedDay] = useState(today.getMonth() === currentDate.getMonth() ? today.getDate() : 1);
  const [eventText, setEventText] = useState("");
  const [events, setEvents] = useState([]);

  const selectedDateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay);
  const formattedSelectedDate = formatDate(selectedDateObj);

  const addEvent = () => {
    if (eventText.trim() !== "") {
      const newEvent = { date: formattedSelectedDate, text: eventText.trim() };
      setEvents([...events, newEvent]);
      console.log("Event added on", formattedSelectedDate, ":", eventText);
      setEventText("");
    }
  };

  const eventsForSelectedDate = events.filter(event => event.date === formattedSelectedDate);

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    setSelectedDay(1);
    console.log("Switched to previous month:", newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    setSelectedDay(1);
    console.log("Switched to next month:", newDate);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  return (
    <div className="flex flex-col items-center p-4">
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
      <div className="w-full max-w-md mb-4">
        <div className="grid grid-cols-7 gap-2 text-center font-semibold dark:text-white">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid grid-cols-7 gap-2 mt-2">
          {calendarCells.map((day, index) =>
            day ? (
              <button
                key={index}
                onClick={() => { setSelectedDay(day); console.log("Selected day:", day); }}
                className={`p-2 border rounded cursor-pointer ${day === selectedDay ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-600 dark:text-white"}`}
              >
                {day}
              </button>
            ) : (
              <div key={index} className="p-2"></div>
            )
          )}
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Add event description..."
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          className="box-border p-2 border border-gray-300 rounded w-64 dark:text-white"
        />
        <button
          onClick={addEvent}
          className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded cursor-pointer"
        >
          Add Event
        </button>
      </div>
      <div className="w-full max-w-md">
        <h3 className="font-bold mb-2 dark:text-white">Events on {formattedSelectedDate}:</h3>
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