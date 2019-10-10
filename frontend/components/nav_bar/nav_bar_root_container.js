import { connect } from 'react-redux';

import RootNavBar from './nav_bar_root'
import {logout} from '../../actions/session_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootNavBar);
