import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({handleclick}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [input,setinput] = useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." value={input} onChange={(e)=> {setinput(e.target.value)}}/>
      <button data-cy="add-task-button" onClick={()=>{handleclick(input)
      setinput("")}}>➕</button>
    </div>
  );
};

export default AddTask;
