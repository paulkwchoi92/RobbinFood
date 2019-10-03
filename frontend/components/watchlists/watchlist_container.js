import { connect } from 'react-redux';
import WatchLists from './watchlist'
const mapStateToProps = ({entities : { users}}) => {
  // debugger
  return {
    watchlists: users.watchlists
  }
}

const mapDispatchToProps = dispatch => {
  return 
}
 export default connect(mapStateToProps, null)(WatchLists)
