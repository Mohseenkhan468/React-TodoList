import React, { useEffect, useState } from "react";
import './task.css'
export default function Task({ newTask }) {
  const [tasks, setTasks] = useState([
    // {
    //   title: "Grab some Pizza",
    //   completed: true,
    // },
    // {
    //   title: "Do your workout",
    //   completed: true,
    // },
    // {
    //   title: "Hangout with friends",
    //   completed: false,
    // },
  ]);
  useEffect(() => {
    if (newTask) {
      setTasks((prevState) => [
        ...prevState,
        { title: newTask, completed: false },
      ]);
    }
  }, [newTask]);
  const deleteTask = (e, index) => {
    e.preventDefault();
    const newTask = [...tasks];
    console.log("before delte", tasks);
    newTask.splice(index, 1);
    setTasks(newTask);
    console.log("after delete", tasks);
  };
  const doneTask = (e, index) => {
    e.preventDefault();
    const newTask = [...tasks];
    newTask[index].completed = true;
    // console.log('newTask',newTask)
    setTasks(newTask);
  };
  console.log(tasks);
  return (
    <div className="task-container">
      
      <h1 className="task-header">Tasks</h1>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <p style={{ textDecoration: task.completed ? "line-through" : "" }} className='task-content'>
            {task.title}
          </p>
          <button onClick={(e) => deleteTask(e, index)} className='btn'>Delete</button>
          {task.completed ? (
            ""
          ) : (
            <button onClick={(e) => doneTask(e, index)} className='btn'>Done</button>
          )}
        </div>
      ))}
    </div>
  );
}
