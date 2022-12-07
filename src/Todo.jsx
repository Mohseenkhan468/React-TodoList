import React, { useState } from "react";
import Task from "./Task";
import './task.css'
export default function Todo() {
  const [value, setValue] = useState("");
  const [newTask, setNewTask] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask(value);
    setValue("");
  };
  return (
    <div className="todo-list">
      <Task newTask={newTask} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Add a task"
          onChange={(e) => handleChange(e)}
          value={value}
          className="task-input"
        />
      </form>
    </div>
  );
}
