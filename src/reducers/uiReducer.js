import { UI_ACTIONS } from "../actions";
function ui(state = {}, action) {
  switch (action.type) {
    case UI_ACTIONS.TOGGLE_DARK:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case UI_ACTIONS.SET_ANIMATION:
      return {
        ...state,
        animation: {
          name: action.payload.name,
          timeout: action.payload.timeout
        }
      }
    default:
      return state;
  }
}

export default ui;