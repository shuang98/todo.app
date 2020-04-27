import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditButton({ onClick }) {
  const ref = useRef();
  return (
    <button
      ref={ref}
      className="edit-btn"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        ref.current.blur();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      <FontAwesomeIcon icon="pen" />
    </button>
  );
}

export default EditButton;
