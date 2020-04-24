import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TrashButton({onClick}) {
  const ref = useRef();
  return (
    <button
      ref={ref}
      className="trash-btn"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        ref.current.blur();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      <FontAwesomeIcon icon="trash" />
    </button>
  );
}

export default TrashButton;
