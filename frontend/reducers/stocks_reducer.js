import { RECEIVE_ONE_STOCK, RECEIVE_MANY_STOCKS } from "../actions/stock_actions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ONE_STOCK:
      return Object.assign({}, state, action.stock);
    case RECEIVE_MANY_STOCKS:
      return Object.assign({}, state, action.stock)
    default:
      return state;
  }
};