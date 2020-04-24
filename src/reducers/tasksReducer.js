import { TASK_ACTIONS, GROUP_ACTIONS } from "../actions";
import { combineReducers } from "redux";

function byId(state = {}, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD:
      return {
        ...state,
        [action.task.id]: action.task,
      }
    case TASK_ACTIONS.REMOVE:
      delete state[action.payload.id];
      return { ...state }
    case TASK_ACTIONS.EDIT:
      const { fields, id } = action.payload
      return {
        ...state,
        [id]: {
          ...state[id],
          ...fields
        }
      }
    case GROUP_ACTIONS.REMOVE:
      const newState = {};
      for (const id in state) {
        const task = state[id];
        if (task.groupId !== action.id) {
          newState[id] = task;
        }
      }
      return newState;
    default:
      return state;
  }
}

function byGroupId(state = {}, action) {
  switch (action.type) {
    case GROUP_ACTIONS.ADD:
      return {
        ...state,
        [action.group.id]: []
      }
    case GROUP_ACTIONS.REMOVE:
      delete state[action.id];
      return { ...state };
    case TASK_ACTIONS.ADD:
      const gid = action.task.groupId;
      return {
        ...state,
        [gid]: [action.task.id, ...state[gid]]
      }
    case TASK_ACTIONS.REMOVE:
      return {
        ...state,
        [action.payload.groupId]: state[action.payload.groupId].filter(tid => tid !== action.payload.id)
      }
    default:
      return state;
  }
}

// function all(state = [], action) {
//   switch (action.type) {
//     case TASK_ACTIONS.ADD:
//       return [...state, action.task.id];
//     case TASK_ACTIONS.REMOVE:
//       return state.filter(taskId => taskId !== action.payload.id);
//     default:
//       return state;
//   }
// }

export default combineReducers({ byId, byGroupId });