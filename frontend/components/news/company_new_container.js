import { connect } from 'react-redux'


import News from "./news"
import { fetchCompanyNews } from '../../actions/news_actions'

const mapStateToProps = (state) => {
  // debugger
  let news = state.entities.news.news ? state.entities.news.news.articles : null
  return {
    type: "companynews",
    articles: news
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNews: (name ) => dispatch(fetchCompanyNews(name))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
