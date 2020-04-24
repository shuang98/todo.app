import React from "react";
import TaskItem from "./TaskItem";
import NewTaskButton from "./NewTaskButton";
import { useSelector } from "react-redux";

function TaskList() {
  const selectedGroup = useSelector(state => state.groups.selected);
  const taskList = useSelector(state => state.tasks.byGroupId[selectedGroup]);
  return (<div className="task-list">
    {taskList ? taskList.map(tid => <TaskItem key={tid} id={tid}></TaskItem>) : null}
    <NewTaskButton></NewTaskButton>
  </div>)
}

export default TaskList;