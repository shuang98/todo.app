import React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderTask } from "../actions";

function TaskList({ tasks, draggable = false }) {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.groups.selected);
  const onDragEnd = (result) => {
    if (result.destination) {
      dispatch(
        reorderTask(
          selectedGroup,
          result.source.index,
          result.destination.index
        )
      );
    }
  };
  if (!draggable) {
    return <InnerTaskList tasks={tasks} draggable={false} />;
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <InnerTaskList
            draggable={true}
            tasks={tasks}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
          </InnerTaskList>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const InnerTaskList = React.forwardRef((props, ref) => {
  const taskList = props.tasks;
  let animation = useSelector((state) => state.ui.animation);
  if (!animation) {
    animation = { name: "", timeout: 0 };
  }
  const draggableTask = (tid, index) => (
    <Draggable key={tid} draggableId={tid} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskItem key={"task" + tid} id={tid}></TaskItem>
        </div>
      )}
    </Draggable>
  );
  const task = (tid, index) => (
    <TaskItem key={"task" + tid} id={tid}></TaskItem>
  );
  return (
    <div className="task-list" ref={ref}>
      <TransitionGroup
        childFactory={(child) => {
          if (animation.name) {
            return React.cloneElement(child, {
              classNames: animation.name,
              timeout: animation.timeout ? animation.timeout : 0,
            });
          }
          return React.cloneElement(child, {
            enter: false,
            exit: false,
            classNames: "",
            timeout: 0
          });
        }}
      >
        {taskList
          ? taskList.map((tid, index) => {
              return (
                <CSSTransition key={"css" + tid} timeout={0}>
                  {props.draggable
                    ? draggableTask(tid, index)
                    : task(tid, index)}
                </CSSTransition>
              );
            })
          : null}
        {props.children}
      </TransitionGroup>
    </div>
  );
});

export default TaskList;
