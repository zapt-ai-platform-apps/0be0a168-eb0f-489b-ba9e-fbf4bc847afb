import React, { useState, useEffect } from 'react';

const Timer = ({ onBack }) => {
  const presets = [
    { label: '1 Minute', seconds: 60 },
    { label: '5 Minutes', seconds: 300 },
    { label: '10 Minutes', seconds: 600 },
    { label: '30 Minutes', seconds: 1800 },
    { label: '1 Hour', seconds: 3600 },
  ];

  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timerStarted && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            console.log("Timer finished");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerStarted, timeRemaining]);

  const startTimer = (seconds) => {
    setTimeRemaining(seconds);
    setTimerStarted(true);
    console.log("Timer started for", seconds, "seconds");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center p-4">
      {timerStarted && (
        <button
          onClick={onBack}
          className="self-start mb-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded cursor-pointer"
        >
          Back
        </button>
      )}
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Timer Mode</h2>
      {timerStarted && timeRemaining > 0 ? (
        <div className="text-4xl font-mono mb-4">
          {formatTime(timeRemaining)}
        </div>
      ) : !timerStarted ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => startTimer(preset.seconds)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-xl font-bold mt-4">Time's up!</div>
      )}
    </div>
  );
};

export default Timer;