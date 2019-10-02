import { connect } from 'react-redux'


import News from "./news"
import { fetchCompanyNews } from '../../actions/news_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: (name ) => dispatch(fetchCompanyNews(name))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
