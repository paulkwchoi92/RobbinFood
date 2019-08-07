import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // const newState = Object.assign({}, action.errors)
      return Object.assign({}, action.errors);
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};