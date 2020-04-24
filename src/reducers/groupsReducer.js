import { GROUP_ACTIONS } from "../actions";
import { combineReducers } from "redux";

function byId(state = {}, action) {
  switch (action.type) {
    case GROUP_ACTIONS.ADD:
      return {
        ...state,
        [action.group.id]: action.group,
      }
    case GROUP_ACTIONS.REMOVE:
      delete state[action.id];
      return { ...state }
    case GROUP_ACTIONS.EDIT:
      const { fields, id } = action.payload
      return {
        ...state,
        [id]: {
          ...state[id],
          ...fields
        }
      }
    default:
      return state;
  }
}

function all(state = [], action) {
  switch (action.type) {
    case GROUP_ACTIONS.ADD:
      return [...state, action.group.id];
    case GROUP_ACTIONS.REMOVE:
      return state.filter(groupId => groupId !== action.id);
    default:
      return state;
  }
}

function selected(state=null, action) {
  switch (action.type)   {
    case GROUP_ACTIONS.SELECT:
      return action.id
    default:
      return state;
  }
}

export default combineReducers({ byId, all, selected });