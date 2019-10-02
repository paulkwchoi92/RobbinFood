export const RECEIVE_TOP_NEWS = "RECEIVE_TOP_NEWS"
export const RECEIVE_SPECIFIC_NEWS = "RECEIVE_SPECIFIC_NEWS"

export const receiveTopNews = news => ({
  type: RECEIVE_TOP_NEWS,
  news
})

export const receiveSpecificNews = news => ({
  type: RECEIVE_SPECIFIC_NEWS,
  news
})

export const fetchTopNews = () => dispatch => {
  return
}