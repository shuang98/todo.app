import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";
import NewTaskButton from "./NewTaskButton";
import ToggleDarkButton from "./ToggleDarkButton";

function TaskView() {
  const selectedGroup = useSelector(state => state.groups.selected);
  const incomplete = useSelector(state => state.tasks.byGroupId[selectedGroup]);
  const complete = useSelector(state => state.tasks.byGroupIdCompleted[selectedGroup]);
  return (<div className="task-view">
    <TaskList tasks={incomplete} draggable={true}></TaskList>
    {complete && complete.length ? (
      <div>
      <div className="line-header">Completed Tasks</div>
      <TaskList tasks={complete}></TaskList>
      </div>
    ) : (<div></div>)}
    <NewTaskButton></NewTaskButton>
    <ToggleDarkButton></ToggleDarkButton>
  </div>)
}

export default TaskView;