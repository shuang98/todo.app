import React from "react";
import TaskItem from "./TaskItem";
import NewTaskButton from "./NewTaskButton";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderTask } from "../actions";

function DnDWrapper() {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.groups.selected);
  const onDragEnd = (result) => {
    dispatch(reorderTask(selectedGroup, result.source.index, result.destination.index))
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const TaskList = React.forwardRef((props, ref) => {
  const selectedGroup = useSelector((state) => state.groups.selected);
  const taskList = useSelector((state) => state.tasks.byGroupId[selectedGroup]);
  return (
    <div className="task-list" ref={ref}>
      <TransitionGroup>
        {taskList
          ? taskList.map((tid, index) => {
              return (
                <CSSTransition
                  key={"css" + tid}
                  timeout={300}
                  classNames={"fade"}
                >
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
                </CSSTransition>
              );
            })
          : null}
        {props.children}
      </TransitionGroup>
      <NewTaskButton></NewTaskButton>
    </div>
  );
});

export default DnDWrapper;
