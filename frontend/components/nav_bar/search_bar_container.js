import { connect } from 'react-redux';
import { fetchAllStocks } from '../../actions/stock_actions'

import SearchBar from './search_bar'
const mapStateToProps = ({entities})=> {
  return { 
    state: entities.stock,
    search: query => 
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllStocks: () => dispatch(fetchAllStocks())

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
