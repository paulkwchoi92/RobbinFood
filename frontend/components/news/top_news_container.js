import { connect } from 'react-redux'


import News from "./news"
import { fetchTopNews } from '../../actions/news_actions'

const mapStateToProps = (state) => {
  return {
    type: "topnews",
    articles: state.entities.news.news
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchTopNews())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);