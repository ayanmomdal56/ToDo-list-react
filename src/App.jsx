import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteHandle = (index) => {
    const u = [
      ...tasks.slice(0, index), 
      ...tasks.slice(index + 1) 
    ];
    setTasks(u);
  };
  

  return (
    <div className="app">
      <h1>tOdo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
        <div className="heading">
          <h2>
            your todo
          </h2>
        </div>
      <ul className="task-list">
  {tasks.map((task, index) => (
    <li key={index} className="task-item">
      <span>{task}</span>
      <button
        onClick={() => {
          deleteHandle(index);
        }}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;
