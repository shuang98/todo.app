import React from "react";
import TaskItem from "./TaskItem";
import NewTaskButton from "./NewTaskButton";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function TaskList() {
  const selectedGroup = useSelector((state) => state.groups.selected);
  const taskList = useSelector((state) => state.tasks.byGroupId[selectedGroup]);
  return (
    <div className="task-list">
      <TransitionGroup childFactory={child =>React.cloneElement(child)}>
        {taskList ? taskList.map((tid) => {
              return (
                <CSSTransition key={tid} timeout={300} classNames={"fade"}>
                  <TaskItem key={tid} id={tid}></TaskItem>
                </CSSTransition>
              );
            })
          : null}
      </TransitionGroup>
      <NewTaskButton></NewTaskButton>
    </div>
  );
}

export default TaskList;
