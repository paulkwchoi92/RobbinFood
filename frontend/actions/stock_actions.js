import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_ONE_STOCK = "RECEIVE_ONE_STOCK";
export const RECEIVE_MANY_STOCKS = "RECEIVE_MANY_STOCKS";
export const RECEIVE_STOCK_ERRORS = "RECEIVE_STOCK_ERRORS";
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const DELETE_WATCH = "DELETE_WATCH";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";
export const RECEIVE_OWNED_STOCK = "RECEIVE_OWNED_STOCK";
export const RECEIVE_CHART = "RECEIVE_CHART";
export const RECEIVE_PREV_CLOSE = "RECEIVE_PREV_CLOSE";

import { formatChart, createProfile1dChart, createProfileCharts, createDateRangeCharts, padChart } from '../util/chart_util'
// action creators
export const receiveOneStock = stock => ({
  type: RECEIVE_ONE_STOCK,
  stock: stock 
});

export const receiveManyStocks = stocks => ({
  type: RECEIVE_MANY_STOCKS,
  stocks
});

export const receiveStockErrors = errors => ({
  type: RECEIVE_STOCK_ERRORS,
  errors
});

export const receiveAllStocks = stocks => ({
  type: RECEIVE_ALL_STOCKS,
  stocks
});

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

export const receiveWatch = watch => ({
  type: RECEIVE_WATCH,
  watch
});

export const deleteWatch = id => ({
  type: DELETE_WATCH,
  id
});
export const receiveErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});

export const receiveWatchlistItem = item => ({
  type: RECEIVE_WATCHLIST_ITEM,
  item
});
export const receiveOwnedStock = stock => ({
  type: RECEIVE_OWNED_STOCK,
  stock
});

export const receiveChart = chart => ({
  type: RECEIVE_CHART,
  chart
});

export const receivePrevClose = prev => ({
  type: RECEIVE_PREV_CLOSE,
  prev
});
//dispatch actions

export const fetchAllStocks = () => dispatch => {
  return (
    StockAPIUtil.fetchAllStocks().then(stocks =>
      dispatch(receiveAllStocks(stocks))
    ),
    err => dispatch(receiveStockErrors(err))
  );
};

export const fetchStock = symbol => dispatch => {
  return (
    StockAPIUtil.fetchStock(symbol).then(stock => {
      dispatch(receiveOneStock(stock));
    }),
    err => dispatch(receiveStockErrors(err))
  );
};


export const makeTransaction = transaction => dispatch => {
  return StockAPIUtil.makeTransaction(transaction).then(transaction => dispatch(receiveTransaction(transaction)),
    ({ responseJSON }) => dispatch(receiveErrors(responseJSON)));
};



export const watchStock = watchlist => dispatch => {
  return StockAPIUtil.watchStock(watchlist).then(watch => dispatch(receiveWatch(watch)));
};

export const removeWatch = id => dispatch => {
  return StockAPIUtil.deleteWatch(id).then(({ id }) => dispatch(deleteWatch(id)));
};

export const getStockDisplay = (symbols, shares = {}, watchedStocks = new Set()) => dispatch => { //Get any info we need to display the page's initial state
  const promises = [];
  const allCharts = {};
  let prev = 0;
  symbols.forEach(symbol => {
    const stock = {};
    promises.push(Promise.all([
    StockAPIUtil.getInfo(symbol),
    StockAPIUtil.getIntradayChart(symbol)])
      .then(values => {
        const info = values.slice(0, 1);
        const chart = formatChart(values[1]);
        info.forEach(info => {
          Object.assign(stock, info);
        });
        if (symbol in shares) {
          prev += parseFloat(stock.close_yesterday) * shares[symbol];
        } else if (symbols.length === 1) {
          prev = parseFloat(stock.close_yesterday);
        }
        allCharts[symbol] = chart;
        dispatch(receiveOneStock({ [stock.symbol]: stock }));
        const watchlistItem = {
          symbol,
          prev: stock.close_yesterday,
          price: stock.price,
          chart: chart
        };
        if (watchedStocks.has(symbol)) {
          dispatch(receiveWatchlistItem(Object.assign({}, watchlistItem)));
        }
        if (symbol in shares) {
          watchlistItem.shares = shares[symbol];
          dispatch(receiveOwnedStock(watchlistItem));
        }
      }));
  });
  return Promise.all(promises)
    .then(() => {
      const returnChart = symbols.length === 1 ? { "1d": padChart(allCharts[symbols[0]]) } : { "1d": padChart(createProfile1dChart(shares, allCharts)) };

      dispatch(receiveChart(returnChart));
      dispatch(receivePrevClose(prev));
    });
};

export const getStockHistoricalCharts = (symbols, transactions) => dispatch => { //load in additional stock charts
  const promises = [];
  const allCharts = {};
  symbols.forEach(symbol => {
    promises.push(StockAPIUtil.getHistoricalChart(symbol)
      .then(chart => {
        allCharts[symbol] = formatChart(chart);
      }));
  });
  return Promise.all(promises)
    .then(() => {
      const returnChart = symbols.length === 1 ? createDateRangeCharts(allCharts[symbols[0]]) : createProfileCharts(transactions, allCharts);
      dispatch(receiveChart(returnChart));
    });
};