import React from 'react';

export default function TaskList({ tasks, markTaskDone, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 border rounded bg-white dark:bg-gray-700">
          <span className={task.done ? "line-through" : ""}>{task.text}</span>
          <div className="space-x-2">
            {!task.done && (
              <button
                onClick={() => markTaskDone(task.id)}
                className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
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
        </li>
      ))}
    </ul>
  );
}