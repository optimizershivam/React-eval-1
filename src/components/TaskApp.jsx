import React, { useState } from "react";

import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";



const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const[list, setlist] = useState([])
  const handleclick=(e) =>
  {
    setlist([...list,{id:Date.now(),maplist:e,ischecked:false}])
  }
  const handledelete=(id) => 
  {
    const updatedlist = list.filter((e)=>e.id!==id)
    setlist(updatedlist)
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader list={list}></TaskHeader>
      <AddTask handleclick={handleclick}></AddTask>
      <Tasks list={list} handledelete={handledelete}></Tasks>
    </div>
  );
};

export default TaskApp;
