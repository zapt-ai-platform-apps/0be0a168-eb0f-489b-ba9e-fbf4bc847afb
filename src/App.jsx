import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      console.log("Dark mode toggled:", newMode);
      return newMode;
    });
  };

  const addTask = () => {
    setIsAdding(true);
  };

  const handleNewTaskKeyDown = (e) => {
    if (e.key === 'Enter' && newTaskText.trim() !== "") {
      const newTask = { id: Date.now(), text: newTaskText.trim(), done: false };
      setTasks((prevTasks) => [newTask, ...prevTasks]);
      console.log("Task added:", newTask);
      setNewTaskText("");
      setIsAdding(false);
    }
  };

  const markTaskDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, done: true } : task))
    );
    console.log("Task marked as done:", id);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    console.log("Task deleted:", id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-black flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} title="SnapTasks" />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <button
          onClick={addTask}
          className="mb-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded cursor-pointer"
          disabled={isAdding}
        >
          Add Task
        </button>
        {isAdding && (
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyDown={handleNewTaskKeyDown}
            autoFocus
            placeholder="Enter new task..."
            className="box-border p-2 border border-gray-300 rounded w-64 mb-4"
          />
        )}
        <div className="w-full max-w-md overflow-y-auto h-full">
          <TaskList tasks={tasks} markTaskDone={markTaskDone} deleteTask={deleteTask} />
        </div>
      </div>
      <footer className="p-2 text-center bg-gray-200 dark:bg-gray-700">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}