import React from 'react';

export default function Header({ darkMode, toggleDarkMode, title }) {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-900 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded cursor-pointer"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}