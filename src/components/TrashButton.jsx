import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TrashButton() {
  return (
    <button
      className="trash-btn"
      onClick={(e) => {
        console.log("button");
      }}
    >
      <FontAwesomeIcon icon="trash" />
    </button>
  );
}

export default TrashButton;
