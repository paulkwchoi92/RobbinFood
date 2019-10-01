


import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_ONE_STOCK = "RECEIVE_ONE_STOCK";
export const RECEIVE_MANY_STOCKS = "RECEIVE_MANY_STOCKS"
export const RECEIVE_STOCK_ERRORS = "RECEIVE_STOCK_ERRORS"
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS"
export const receiveOneStock = stock => ({
  type: RECEIVE_ONE_STOCK,
  stock
})

export const receiveManyStocks = stocks => ({
  type: RECEIVE_MANY_STOCKS,
  stocks
})

export const receiveStockErrors = errors => ({
  type: RECEIVE_STOCK_ERRORS,
  errors
})

export const receiveAllStocks = stocks => ({
  type: RECEIVE_ALL_STOCKS,
  stocks
})

export const fetchAllStocks = () => dispatch => {
  return StockAPIUtil.fetchAllStocks().then(stocks => 
    dispatch(receiveAllStocks(stocks))),
   err => ( dispatch(receiveStockErrors(err)))
  }


