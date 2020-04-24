import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addTask } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../utils/task";
function NewTaskButton() {
  const dispatch = useDispatch();
  const selectedGroupId = useSelector(state => state.groups.selected);
  const ref = useRef();
  return (
    <button
      ref={ref}
      className="new-task-btn"
      onClick={(e) => {
        e.preventDefault();
        ref.current.blur();
        if (selectedGroupId) {
          const task = Task(selectedGroupId);
          dispatch(addTask(task));
        }
      }}
    >
      <FontAwesomeIcon icon="plus-circle" size="3x"/>
    </button>
  )
}

export default NewTaskButton;