import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addGroup, selectGroup, setAnimation } from "../actions";
import { Group } from "../utils/group";

function NewGroupButton() {
  const dispatch = useDispatch();
  const onClick = e => {
    e.preventDefault();
    const group = Group();
    dispatch(setAnimation("", 0));
    dispatch(addGroup(group));
    dispatch(selectGroup(group.id));
  }
  return (
    <div>
      <a href="/" onClick={onClick} className="new-group-button" style={{ display: "block" }}>
        <FontAwesomeIcon icon="folder-plus" size="3x"/>
      </a>
    </div>
  );
}

export default NewGroupButton;
