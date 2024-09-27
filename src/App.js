import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const handleSave = (task) => {
    if (task.id) {
      // Update task
      setTasks(
        tasks.map((t) => (t.id === task.id ? task : t))
      );
    } else {
      // Add new task
      task.id = Date.now(); // Generate a simple unique ID
      setTasks([...tasks, task]);
    }
    setCurrentTask(null); // Reset after saving
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List Application</h1>
      <TaskForm currentTask={currentTask} onSave={handleSave} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
