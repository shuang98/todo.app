import tasks from "./tasksReducer";
import groups from "./groupsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  tasks, groups
});