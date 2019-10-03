import { combineReducers } from "redux";

import users from "./user_reducer";
import stocks from "./stocks_reducer";
import news from "./news_reducer"
export default combineReducers({
  users,
  stocks,
  news
});
