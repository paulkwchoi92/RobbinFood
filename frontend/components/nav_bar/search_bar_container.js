import { connect } from 'react-redux';
import { fetchAllStocks } from '../../actions/stock_actions'
import { searchStocks } from "../../util/search_util"
import SearchBar from './search_bar'
const mapStateToProps = ({ entities }) => {
  return { 
    state: entities.stock,
    search: searchWord => searchStocks(entities.stocks, searchWord)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllStocks: () => dispatch(fetchAllStocks())

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
