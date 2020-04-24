import React from "react";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";
import { useSelector, useDispatch } from "react-redux";
import { selectGroup, removeGroup } from "../actions";

function GroupItem({ id, selected=false }) {
  const group = useSelector(state => state.groups.byId[id]);
  const dispatch = useDispatch();
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
          <EditButton />
        </div>
        <div style={{ marginLeft: "auto" }}>
          <TrashButton onClick={e => {
            dispatch(removeGroup(id));
          }} />
        </div>
      </div>
      <strong className="group-item-header">{group.name}</strong>
    </a>
  );
}

export default GroupItem;
