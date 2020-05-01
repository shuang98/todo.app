import React from "react";
import GroupList from "./GroupList"
import TaskView from "./TaskView";
import { useSelector } from "react-redux";
function TodoApp() {
  const darkMode = useSelector(state => state.ui.darkMode);
  return (<div className={"app " + (darkMode ? "dark" : "light")}>
    <GroupList></GroupList>
    <TaskView></TaskView>
  </div>)
}

export default TodoApp;