import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addTask, setAnimation } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../utils/task";
import { useHotkeys } from "react-hotkeys-hook";
function NewTaskButton() {
  const dispatch = useDispatch();
  const selectedGroupId = useSelector((state) => state.groups.selected);
  const ref = useRef();
  useHotkeys("command+n", () => {
    ref.current.click();
  });
  return (
    <button
      ref={ref}
      className="new-task-btn"
      onClick={(e) => {
        e.preventDefault();
        ref.current.blur();
        if (selectedGroupId) {
          const task = Task(selectedGroupId);
          dispatch(setAnimation("fade", 300));
          dispatch(addTask(task));
        }
      }}
    >
      <FontAwesomeIcon icon="plus-circle" size="3x" />
    </button>
  );
}

export default NewTaskButton;
