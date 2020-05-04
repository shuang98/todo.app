import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";
import NewTaskButton from "./NewTaskButton";
import ToggleDarkButton from "./ToggleDarkButton";

function TaskView() {
  const selectedGroup = useSelector((state) => state.groups.selected);
  const incomplete = useSelector(
    (state) => state.tasks.byGroupId[selectedGroup]
  );
  const complete = useSelector(
    (state) => state.tasks.byGroupIdCompleted[selectedGroup]
  );
  return (
    <div className="task-view">
      <div className="task-view-content">
        <TaskList tasks={incomplete} draggable={true}></TaskList>
        {complete && complete.length ? (
          <div>
            <div className="line-header">Completed Tasks</div>
            <TaskList tasks={complete}></TaskList>
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ height: "6em" }}></div>
      </div>
      <div className="left-toolbar">
        <NewTaskButton></NewTaskButton>
        <ToggleDarkButton></ToggleDarkButton>
      </div>
    </div>
  );
}

export default TaskView;
