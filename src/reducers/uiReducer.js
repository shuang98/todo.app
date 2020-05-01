import { TOGGLE_DARK } from "../actions";
function ui(state = {}, action) {
  switch (action.type) {
    case TOGGLE_DARK:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    default:
      return state;
  }
}

export default ui;