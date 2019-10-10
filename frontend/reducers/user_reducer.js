import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        user: action.currentUser.user.user,
        watchlists: action.currentUser.user.watchlists,
        ownedStocks: action.currentUser.user.ownedStocks,
        transactions: action.currentUser.user.transactions
      });
    default:
      return state;
  }
};

export default usersReducer;
