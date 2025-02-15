import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markTaskDone, deleteTask }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          markTaskDone={markTaskDone} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;