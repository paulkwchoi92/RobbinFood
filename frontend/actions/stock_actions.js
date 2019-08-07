import * as APIUtil from "../utils/stock_api_utils";
import { formatChart, createProfile1dChart, createProfileCharts, createDateRangeCharts, padChart } from '../utils/chart_utils';

export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_OWNED_STOCK = "RECEIVE_OWNED_STOCK";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";

export const receiveOwnedStock = stock => ({
  type: RECEIVE_OWNED_STOCK,
  stock
});


export const receiveErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});

export const receiveTransaction = payload => ({
  type: RECEIVE_TRANSACTION,
  payload
});

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});


export const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});

export const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});


export const receiveChart = chart => ({
  type: RECEIVE_CHART,
  chart
});

export const receiveSearch = search => ({
  type: RECEIVE_SEARCH,
  search
})

export const receiveWatch = watch => ({
  type: RECEIVE_WATCH,
  watch
});

export const deleteWatch = id => ({
  type: DELETE_WATCH,
  id
});

export const receivePrevClose = prev => ({
  type: RECEIVE_PREV_CLOSE,
  prev
});

export const receiveWatchlistItem = item => ({
  type: RECEIVE_WATCHLIST_ITEM,
  item
});
