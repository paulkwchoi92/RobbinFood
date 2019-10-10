import { connect } from "react-redux"
import StockTransaction from './stocks_transaction'
import { makeTransaction, watchStock, removeWatch } from '../../actions/stock_actions'
const mapDispatchToProps = dispatch => {
  return {
    makeTransaction: data => dispatch(makeTransaction(data)),
    watchStock: data => dispatch(watchStock(data)),
    removeWatch: data => dispatch(removeWatch(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StockTransaction);
