import { connect } from 'react-redux'


import News from "./news"
import { fetchCompanyNews } from '../../actions/news_actions'

const mapStateToProps = (state) => {
  return {
    type: "companynews"

  };
};

const mapDispatchToProps = dispatch => ({
  fetchNews: (name ) => dispatch(fetchCompanyNews(name))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
