import React from 'react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="w-full p-4 flex items-center">
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          console.log('Dark mode toggled to', !darkMode);
        }}
        className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
}