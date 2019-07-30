import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.thype) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};
