import React from 'react';

const Header = ({ darkMode, toggleDarkMode, title }) => {
  return (
    <header className="p-4 bg-gray-300 dark:bg-gray-900 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

const TaskList = ({ tasks, markTaskDone, deleteTask }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center p-2 border border-gray-300 rounded">
          <span className={task.done ? "line-through" : ""}>{task.text}</span>
          <div className="space-x-2">
            {!task.done && (
              <button
                onClick={() => markTaskDone(task.id)}
                className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Done
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Header, TaskList };