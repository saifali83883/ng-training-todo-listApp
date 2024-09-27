import React, { useState, useEffect } from 'react';
import './TaskForm.css'; // Import the new CSS file

const TaskForm = ({ currentTask, onSave }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ title: '', description: '' }); // Clear form after saving
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{currentTask ? 'Edit Task' : 'Add Task'}</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
