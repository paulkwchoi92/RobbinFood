import { connect } from "react-redux";
import StockShow from "./stocks_show";
import { fetchStock } from "../../actions/stock_actions";
import { fetchUser } from "../../actions/session_actions"
const mapStateToProps = ({ session, entities }) => {
  // debugger
  let currentStock = entities.stocks.currentStock ? entities.stocks.currentStock : null
  let watchLists = entities.users.watchlists ? entities.users.watchlists : null 
  let ownedStocks = entities.users.ownedStocks ? entities.users.ownedStocks : null
  let buyingPower = entities.users.user ? entities.users.user.buying_power : null
  let singleDay = entities.stocks.singleDay ? entities.stocks.singleDay : null
  return {
    currentStock: currentStock,
    currentUserId: session.id,
    watchLists: watchLists,
    buyingPower: buyingPower,
    ownedStocks: ownedStocks,
    singleDayChart: singleDay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchUser: id => dispatch(fetchUser(id))};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
