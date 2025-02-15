import React from 'react';

const CalendarNavigation = ({ currentDate, onPrevious, onNext }) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={onPrevious}
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        Previous
      </button>
      <div className="mx-4 font-bold text-lg dark:text-white">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default CalendarNavigation;