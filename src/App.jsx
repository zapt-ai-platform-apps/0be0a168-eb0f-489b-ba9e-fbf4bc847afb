import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('Dark mode is now', darkMode ? 'enabled' : 'disabled');
  }, [darkMode]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = { id: Date.now(), text: newTask.trim(), done: false };
    setTasks(prev => [task, ...prev]);
    setNewTask('');
    setShowInput(false);
    console.log('Task added:', task.text);
  };

  const markTaskAsDone = (id) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, done: true } : task))
    );
    console.log('Task marked as done:', id);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    console.log('Task deleted:', id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <button
          onClick={() => {
            setShowInput(true);
            console.log('Add Task button clicked');
          }}
          className="cursor-pointer bg-neonGreen text-black font-bold py-4 px-8 rounded-full mb-4 hover:bg-green-500"
          disabled={showInput}
        >
          Add Task
        </button>
        {showInput && (
          <div className="mb-4">
            <input
              type="text"
              ref={inputRef}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTask();
              }}
              className="box-border border border-gray-300 p-2 rounded outline-none"
              placeholder="Type your task..."
            />
            <button
              onClick={addTask}
              className="cursor-pointer ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        )}
        <div className="w-full max-w-md flex-1 overflow-y-auto">
          {tasks.length === 0 ? (
            <p className="text-center">No tasks yet. Add one!</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onMarkDone={() => markTaskAsDone(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))
          )}
        </div>
      </main>
      <footer className="p-4 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm underline"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}