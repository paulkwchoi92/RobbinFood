import { connect } from 'react-redux'
import PostLongHomePage from './postlog_homepage'

const mapStateToProps = ({ session, entities }) => {
  // debugger
  let watchLists = entities.users.watchlists ? entities.users.watchlists : null
  let ownedStocks = entities.users.ownedStocks ? entities.users.ownedStocks : null
  let buyingPower = entities.users.user ? entities.users.user.buying_power : null
  return {
    currentUserId: session.id,
    watchLists: watchLists,
    buyingPower: buyingPower,
    ownedStocks: ownedStocks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};