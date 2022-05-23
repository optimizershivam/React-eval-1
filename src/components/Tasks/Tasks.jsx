import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({list,handledelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {list.map((e)=>{ 
          return  <Task e={e} key={e.id} handledelete={handledelete}></Task>

        })}
       
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
