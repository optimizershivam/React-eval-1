import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({list}) => {
  // sample values to be replaced
  let totalTask = list.length;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <h3>You Have
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      of
      <b data-cy="header-total-task">{totalTask}</b>Task Remaining</h3>
    </div>
  );
};

export default TaskHeader;
