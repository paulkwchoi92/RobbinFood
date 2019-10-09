import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_WATCH, DELETE_WATCH } from '../actions/stock_actions'
const usersReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        watchlists: action.currentUser.user.watchlists
      });
    case RECEIVE_WATCH:
      return Object.assign({}, state, { [action.watch.id]: action.watch });
    case DELETE_WATCH:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
