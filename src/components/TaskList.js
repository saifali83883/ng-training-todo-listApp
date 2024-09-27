import React from 'react';
import './TaskList.css'; // Import the CSS file

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
            <button className="edit-btn" onClick={() => onEdit(task)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
