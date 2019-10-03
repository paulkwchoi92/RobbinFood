import { RECEIVE_NEWS_ERROR } from "../actions/news_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_ERROR:
      // const newState = Object.assign({}, action.errors)
      return Object.assign({}, action.errors);
    default:
      return state;
  }
};
