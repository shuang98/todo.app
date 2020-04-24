import React from "react";
import TaskList from "./TaskList";
import GroupList from "./GroupList"
function TodoApp() {
  return (<div className="app">
    <GroupList></GroupList>
    <TaskList></TaskList>
  </div>)
}

export default TodoApp;