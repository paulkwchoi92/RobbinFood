


import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_ONE_STOCK = "RECEIVE_ONE_STOCK";
export const RECEIVE_MANY_STOKCS = "RECEIVE_MANY_STOCKS"
export const RECEIVE_STOCK_ERRORS = "RECEIVE_STOCK_ERRORS"
export const receiveOneStocker = stock => ({
  type: RECEIVE_ONE_STOCK,
  stock
})

export const receiveManySotkcs = stocks => ({
  type: RECEIVE_MANY_STOKCS,
  stocks
})

export const receiveStockErrors = errors => ({
  type: RECEIVE_STOCK_ERRORS,
  errors
})




