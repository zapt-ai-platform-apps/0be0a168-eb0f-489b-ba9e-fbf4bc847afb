import React from 'react';

const CalendarNavigation = ({ currentDate, onPrevious, onNext }) => {
  return (
    <div className="mb-4 flex items-center">
      <button
        onClick={onPrevious}
        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded cursor-pointer"
      >
        ←
      </button>
      <span className="mx-4 text-xl font-medium dark:text-white">
        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </span>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded cursor-pointer"
      >
        →
      </button>
    </div>
  );
};

export default CalendarNavigation;