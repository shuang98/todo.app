import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TrashButton from "./TrashButton";
import { removeTask } from "../actions";

function TaskItem({ id }) {
  const task = useSelector((state) => state.tasks.byId[id]);
  const dispatch = useDispatch();
  return (
    <div className="task-item">
      <div style={{flex:1, padding: "0.5em"}}>
        {task.description} {task.id}
      </div>
      <div style={{width: "1em", paddingRight: "0.25em"}}>
        <TrashButton
          onClick={(e) => {
            dispatch(removeTask(id, task.groupId));
          }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
