import React from "react";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";

function GroupItem({ name }) {
  return (
    <a
      href="/"
      className="group-item"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ textAlign: "left" }}>
          <EditButton />
        </div>
        <div style={{ marginLeft: "auto" }}>
          <TrashButton />
        </div>
      </div>
      <strong className="group-item-header">{name}</strong>
    </a>
  );
}

export default GroupItem;
