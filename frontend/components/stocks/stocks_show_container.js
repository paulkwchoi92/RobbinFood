import { connect } from 'react-redux'
import StockShow from './stocks_show'
import {fetchStock } from '../../actions/session_actions'
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  fetchStock: symbol  => dispatch(fetchStock(symbol))
})

export default connect(null, mapDispatchToProps)(StockShow)