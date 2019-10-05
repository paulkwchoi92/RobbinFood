import { connect } from "react-redux";
import StockShow from "./stocks_show";
import { fetchStock } from "../../actions/stock_actions";
const mapStateToProps = state => {
  debugger
  return {};
};

const mapDispatchToProps = dispatch => {
  return { fetchStock: symbol => dispatch(fetchStock(symbol)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
