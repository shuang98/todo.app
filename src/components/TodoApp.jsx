import React from "react";
import GroupList from "./GroupList"
import TaskView from "./TaskView";
function TodoApp() {
  return (<div className="app">
    <GroupList></GroupList>
    <TaskView></TaskView>
  </div>)
}

export default TodoApp;