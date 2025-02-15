import React, { useState, useRef } from 'react';

const TaskItem = ({ task, markTaskDone, deleteTask }) => {
  const [dragX, setDragX] = useState(0);
  const [transition, setTransition] = useState("");
  const startXRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    setTransition("");
  };

  const handleTouchMove = (e) => {
    if (startXRef.current !== null) {
      const currentX = e.touches[0].clientX;
      const delta = currentX - startXRef.current;
      setDragX(delta);
    }
  };

  const handleTouchEnd = () => {
    finishSwipe();
  };

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
    setTransition("");
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current && startXRef.current !== null) {
      const currentX = e.clientX;
      const delta = currentX - startXRef.current;
      setDragX(delta);
    }
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      finishSwipe();
    }
  };

  const finishSwipe = () => {
    const threshold = 75;
    if (dragX > threshold) {
      setTransition("transform 0.3s ease-out");
      setDragX(500);
      setTimeout(() => {
        markTaskDone(task.id);
      }, 300);
    } else if (dragX < -threshold) {
      setTransition("transform 0.3s ease-out");
      setDragX(-500);
      setTimeout(() => {
        deleteTask(task.id);
      }, 300);
    } else {
      setTransition("transform 0.3s ease-out");
      setDragX(0);
    }
    startXRef.current = null;
  };

  return (
    <div
      className={`p-4 bg-gray-100 dark:bg-gray-300 rounded cursor-pointer transition-transform duration-300 ease-out ${task.done ? "line-through opacity-50" : ""}`}
      style={{ transform: `translateX(${dragX}px)`, transition }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {task.text}
    </div>
  );
};

export default TaskItem;