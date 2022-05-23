import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({e,handledelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[ischecked,setchecked] = useState(e.ischecked)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={ischecked} onChange={(e)=> setchecked(e.target.checked)} />
      <div data-cy="task-text">
        <h3 className={ischecked?styles.s1:styles.s2}>{e.maplist}</h3>
      </div>
      {/* Counter here */}
      <Counter></Counter>
      <button data-cy="task-remove-button" onClick={()=>handledelete(e.id)}>❌</button>
    </li>
  );
};

export default Task;
