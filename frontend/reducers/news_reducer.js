import merge from "lodash/merge";

import {
  RECEIVE_TOP_NEWS,
  RECEIVE_SPECIFIC_NEWS
} from "../actions/news_actions";

const newsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_NEWS:
      return merge({}, state, { news: action.news });
    case RECEIVE_SPECIFIC_NEWS:
      return merge({}, state, { news: action.news });
    default:
      return state;
  }
};

export default newsReducer;
