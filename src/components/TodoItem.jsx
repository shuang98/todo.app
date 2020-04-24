import React from "react";

function TodoItem({text}) {
  return (<div className="card">
    <p>{text}</p>
  </div>)
}

export default TodoItem;