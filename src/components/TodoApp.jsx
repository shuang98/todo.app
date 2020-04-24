import React from "react";
import TodoList from "./TodoList";
import GroupList from "./GroupList"
function TodoApp() {
  return (<div className="app">
    <GroupList></GroupList>
    <TodoList></TodoList>
  </div>)
}

export default TodoApp;