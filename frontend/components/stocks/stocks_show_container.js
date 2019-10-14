import { connect } from "react-redux";
import StockShow from "./stocks_show";
import { fetchStock } from "../../actions/stock_actions";
import { fetchUser } from "../../actions/session_actions";
const mapStateToProps = ({ session, entities }) => {
  let currentStock = entities.stocks.currentStock
    ? entities.stocks.currentStock
    : null;
  let watchLists = entities.users.watchlists ? entities.users.watchlists : null;
  let ownedStocks = entities.users.ownedStocks
    ? entities.users.ownedStocks
    : null;
  let buyingPower = entities.users.user
    ? entities.users.user.buying_power
    : null;
  let charts = entities.stocks.charts ? entities.stocks.charts : null;
  let stockInfo = entities.stocks.stockinfo ? entities.stocks.stockinfo : null;
  return {
    currentStock: currentStock,
    currentUserId: session.id,
    watchLists: watchLists,
    buyingPower: buyingPower,
    ownedStocks: ownedStocks,
    charts: charts,
    stockinfo: stockInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
