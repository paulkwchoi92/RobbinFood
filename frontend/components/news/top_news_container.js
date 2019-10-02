import { connect } from 'react-redux'


import News from "./news"
import { fetchTopNews } from '../../actions/news_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(fetchCompanyNews())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);