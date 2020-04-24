import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewGroupButton() {
  return (
    <div>
      <a href="/" className="new-group-button" style={{ display: "block" }}>
        <FontAwesomeIcon icon="folder-plus" size="3x"/>
      </a>
    </div>
  );
}

export default NewGroupButton;
