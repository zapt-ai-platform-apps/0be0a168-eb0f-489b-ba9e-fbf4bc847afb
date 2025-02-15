import React from 'react';

const Header = ({ darkMode, toggleDarkMode, title }) => {
  return (
    <header className="w-full bg-gray-100 dark:bg-gray-700 p-4">
      <div className="grid grid-cols-3 items-center">
        <button onClick={toggleDarkMode} className="cursor-pointer text-sm font-medium text-blue-600">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <div></div>
      </div>
    </header>
  );
};

export default Header;