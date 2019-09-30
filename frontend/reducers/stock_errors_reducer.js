import {
  RECEIVE_STOCK_ERRORS
} from "../actions/stock_actions"

const stockErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOCK_ERRORS:
      return Object.assign({}, action.errors);
    default:
      return state
  }
}
export default stockErrorReducer