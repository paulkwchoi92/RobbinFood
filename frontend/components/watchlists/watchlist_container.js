import Watchlist from "./watchlist";
import { connect } from "react-redux";

const msp = state => {
  let watchList = state.entities.watchlists.watchList
    ? state.entities.watchlists.watchList
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
