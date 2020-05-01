import tasks from "./tasksReducer";
import groups from "./groupsReducer";
import ui from "./uiReducer";
import { combineReducers } from "redux";

export default combineReducers({
  tasks, groups, ui
});