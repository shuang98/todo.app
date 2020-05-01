import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleDark } from "../actions";
import { useDispatch } from "react-redux";
function ToggleDarkButton() {
  const dispatch = useDispatch();
  const ref = useRef();
  return (
    <button
      ref={ref}
      className="toggle-dark-btn"
      onClick={(e) => {
        e.preventDefault();
        ref.current.blur();
        dispatch(toggleDark());
      }}
    >
      <FontAwesomeIcon icon="adjust" size="3x"/>
    </button>
  )
}

export default ToggleDarkButton;