import { connect } from 'react-redux'
import PostLogHomePage from './postlog_homepage'
import { fetchUser } from '../../actions/session_actions'
import { getStockDisplay, getStockHistoricalCharts } from "../../actions/stock_actions"
const mapStateToProps = ({ session, entities }) => {
  let watchLists = entities.users.watchlists ? entities.users.watchlists : null
  let ownedStocks = entities.users.ownedStocks ? entities.users.ownedStocks : null
  let buyingPower = entities.users.user ? entities.users.user.buying_power : null
  let transactions = entities.users.transactions ? entities.users.transactions : null
  return {
    currentUserId: session.id,
    watchLists: watchLists,
    buyingPower: buyingPower,
    ownedStocks: ownedStocks,
    transactions: transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    getStockDisplay: (symbols, shares, watchedStocks) => dispatch(getStockDisplay(symbols, shares, watchedStocks)),
    getStockHistoricalCharts: (symbols, transactions) => dispatch(getStockHistoricalCharts(symbols, transactions)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostLogHomePage);
