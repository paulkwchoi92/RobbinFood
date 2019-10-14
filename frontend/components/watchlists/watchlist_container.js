import Watchlist from "./watchlist";
import { connect } from "react-redux";

const msp = state => {
  let watchList = state.entities.users.watchlists
    ? state.entities.users.watchlists
    : null;
  let ownedStocks = state.entities.ownedstocks
    ? state.entities.ownedstocks
    : null;
  return {
    watchedStocks: watchList,
    ownedStocks: ownedStocks
  };
};

export default connect(
  msp,
  null
)(Watchlist);
