import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditButton() {
  return (
    <button
      className="edit-btn"
      onClick={(e) => {
        console.log("button");
      }}
    >
      <FontAwesomeIcon icon="pen" />
    </button>
  );
}

export default EditButton;