import React, { useState } from 'react';

const Calendar = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [eventText, setEventText] = useState("");
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    if (eventText.trim() !== "") {
      setEvents([...events, { date: selectedDate, text: eventText.trim() }]);
      console.log("Event added on", selectedDate, ":", eventText);
      setEventText("");
    }
  };

  const eventsForSelectedDate = events.filter(event => event.date === selectedDate);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onBack}
        className="self-start mb-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded cursor-pointer"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold mb-4">Calendar Mode</h2>
      <div className="mb-4">
        <label className="mr-2 font-medium">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="box-border p-2 border border-gray-300 rounded cursor-pointer"
        />
      </div>
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
        <h3 className="font-bold mb-2">Events on {selectedDate}:</h3>
        {eventsForSelectedDate.length === 0 ? (
          <p className="text-gray-600">No events for this date.</p>
        ) : (
          <ul className="list-disc list-inside">
            {eventsForSelectedDate.map((event, index) => (
              <li key={index}>{event.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calendar;