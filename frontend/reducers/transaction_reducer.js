import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TRANSACTION } from "../actions/stock_actions";
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        watchlists: action.currentUser.user.watchlists
      });
    case RECEIVE_TRANSACTION:
      return Object.assign({}, state, {
        [action.transaction.id]: action.transaction
      });
    default:
      return state;
  }
};

export default usersReducer;
