import React from 'react';
import { useSwipeable } from 'react-swipeable';

const TaskItem = ({ task, onMarkDone, onDelete }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swiped left on task:', task.id);
      onDelete();
    },
    onSwipedRight: () => {
      console.log('Swiped right on task:', task.id);
      onMarkDone();
    },
    delta: 50,
  });

  return (
    <div
      {...handlers}
      className={`p-4 border border-gray-300 rounded mb-2 bg-white dark:bg-gray-800 ${
        task.done ? 'line-through opacity-50' : ''
      }`}
    >
      {task.text}
    </div>
  );
};

export default TaskItem;