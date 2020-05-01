import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";

function TaskView() {
  const selectedGroup = useSelector(state => state.groups.selected);
  const incomplete = useSelector(state => state.tasks.byGroupId[selectedGroup]);
  const complete = useSelector(state => state.tasks.byGroupIdCompleted[selectedGroup]);
  return (<div className="task-view">
    <TaskList tasks={incomplete} draggable={true}></TaskList>
    {complete.length ? (
      <div>
      <div className="line-header">Completed Tasks</div>
      <TaskList tasks={complete}></TaskList>
      </div>
    ) : (<div></div>)}
    
  </div>)
}

export default TaskView;