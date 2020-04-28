import { createStore } from "redux";
import reducer from "./reducers/reducer"
const FileStore = require('electron-store');
const fileStore = new FileStore();
const initialState = fileStore.get("app_state");

const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
  fileStore.set("app_state", store.getState());
});
export default store;