import { connect } from 'react-redux';

import RootNavBar from './nav_bar_root'


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};



export default connect(
  mapStateToProps,
)(RootNavBar);
