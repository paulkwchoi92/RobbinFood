import { connect } from 'react-redux'
import StockShow from './stocks_show'
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  fetchStock:( symbol ) => dispatch(fetchStock(symbol))
})