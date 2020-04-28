import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import TrashButton from "./TrashButton";
import { removeTask, editTask } from "../actions";
import TextareaAutosize from "react-textarea-autosize";
import { useHotkeys } from "react-hotkeys-hook";

function TaskTextField({ task, setEditing }) {
  const [descField, setDescField] = useState(task ? task.description : "");
  const ref = useRef();
  const dispatch = useDispatch();
  const onFinishEditing = () => {
    if (descField) {
      dispatch(editTask({ description: descField, initialized: true }, task.id));
    }
    setEditing(false);
  };
  useHotkeys(
    "command+enter",
    () => {
      ref.current.blur();
    },
    {
      enableOnTags: ["TEXTAREA", "INPUT"],
    }
  );

  return (
    <TextareaAutosize
      inputRef={ref}
      minRows={3}
      autoFocus
      onBlur={onFinishEditing}
      onChange={(e) => {
        setDescField(e.target.value);
      }}
      value={descField}
    />
  );
}

function TaskItem({ id }) {
  const task = useSelector((state) => state.tasks.byId[id]);
  const [editing, setEditing] = useState(task && !task.initialized);
  const dispatch = useDispatch();
  return (
    <div className="task-item">
      {editing ? (
        <TaskTextField task={task} setEditing={setEditing} />
      ) : (
        <div
          onClick={(e) => {
            setEditing(true);
          }}
          style={{ whiteSpace: "pre-wrap", flex: 1, padding: "0.5em" }}
        >
          {task ? task.description : " "}
        </div>
      )}
      <div style={{ width: "1em", paddingRight: "0.25em" }}>
        <TrashButton
          onClick={(e) => {
            if (task) {
              dispatch(removeTask(id, task.groupId));
            }
          }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
