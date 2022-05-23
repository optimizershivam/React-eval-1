import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // // sample value to be replaced
  // let count = 0;
  // // NOTE: do not delete `data-cy` key value pair
  const [count, setcount] =  useState(1)
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>setcount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"onClick={()=>setcount(count>0 ? count-1: count=0)}>-</button>
    </div>
  );
};

export default Counter;
