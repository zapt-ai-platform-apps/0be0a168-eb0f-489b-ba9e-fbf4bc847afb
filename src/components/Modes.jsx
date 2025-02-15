import React from 'react';

const Timer = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Timer Mode</h2>
      <p className="mb-4">This is a timer component.</p>
      <button
        onClick={onBack}
        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded"
      >
        Back
      </button>
    </div>
  );
};

const Calendar = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Calendar View</h2>
      <p className="mb-4">This is a calendar component.</p>
      <button
        onClick={onBack}
        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded"
      >
        Back
      </button>
    </div>
  );
};

export { Timer, Calendar };