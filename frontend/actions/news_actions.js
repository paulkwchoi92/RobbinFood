export const RECEIVE_TOP_NEWS = "RECEIVE_TOP_NEWS";
export const RECEIVE_SPECIFIC_NEWS = "RECEIVE_SPECIFIC_NEWS";
export const RECEIVE_NEWS_ERROR = "RECEIVE_NEWS_ERROR";
import * as NewsApiUtil from "../util/news_api_util";
export const receiveTopNews = news => ({
  type: RECEIVE_TOP_NEWS,
  news
});

export const receiveSpecificNews = news => ({
  type: RECEIVE_SPECIFIC_NEWS,
  news
});

export const receiveNewsErrors = errors => ({
  type: RECEIVE_NEWS_ERROR,
  error
});

export const fetchTopNews = () => dispatch => {
  return (
    NewsApiUtil.fetchTopNews().then(news => {
      // debugger
      dispatch(receiveTopNews(news.articles));
      return news;
    }),
    err => dispatch(receiveNewsErrors(err))
  );
};
export const fetchCompanyNews = (name) => dispatch => {
  debugger
  return (
    NewsApiUtil.fetchCompanyNews(name).then(news =>
      dispatch(receiveSpecificNews(news))
    ),
    err => disptach(receiveNewsErrors(err))
  );
};
