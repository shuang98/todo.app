import React, { useState, useRef, useEffect } from "react";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";
import { useSelector, useDispatch } from "react-redux";
import { selectGroup, removeGroup, editGroup } from "../actions";

function GroupItem({ id, selected = false }) {
  const group = useSelector((state) => state.groups.byId[id]);
  const [editing, setEditing] = useState(group && !group.initialized);
  const [editFieldValue, setEditFieldValue] = useState(group ? group.name : "");
  const inputRef = useRef();
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  });
  const dispatch = useDispatch();
  const onEditFinish = () => {
    if (editFieldValue) {
      dispatch(
        editGroup({ name: editFieldValue, initialized: true }, group.id)
      );
    }
    setEditing(false);
  };
  return (
    <a
      href="/"
      className={selected ? "group-item group-item-selected" : "group-item"}
      onClick={(e) => {
        e.preventDefault();
        dispatch(selectGroup(id));
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ textAlign: "left" }}>
          <EditButton
            onClick={(e) => {
              setEditing(!editing);
            }}
          />
        </div>
        <div style={{ marginLeft: "auto" }}>
          <TrashButton
            onClick={(e) => {
              dispatch(removeGroup(id));
            }}
          />
        </div>
      </div>
      {editing ? (
        <input
          ref={inputRef}
          onBlur={onEditFinish}
          onChange={(e) => {
            setEditFieldValue(e.target.value);
          }}
          onFocus={(e) => {
            e.target.select();
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onEditFinish();
            }
          }}
          value={editFieldValue}
        ></input>
      ) : (
        <strong className="group-item-header">
          {group ? group.name : " "}
        </strong>
      )}
    </a>
  );
}

export default GroupItem;
