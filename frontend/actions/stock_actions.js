import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_ONE_STOCK = "RECEIVE_ONE_STOCK";
export const RECEIVE_MANY_STOCKS = "RECEIVE_MANY_STOCKS";
export const RECEIVE_STOCK_ERRORS = "RECEIVE_STOCK_ERRORS";
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const DELETE_WATCH = "DELETE_WATCH";

// action creators
export const receiveOneStock = stock => ({
  type: RECEIVE_ONE_STOCK,
  stock
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

export const receiveTransaction = payload => ({
  type: RECEIVE_TRANSACTION,
  payload
});

export const receiveWatch = watch => ({
  type: RECEIVE_WATCH,
  watch
});

export const deleteWatch = id => ({
  type: DELETE_WATCH,
  id
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
  // debugger
  return (
    StockAPIUtil.fetchStock(symbol).then(stock => {
      // debugger
      dispatch(receiveOneStock(stock));
    }),
    err => dispatch(receiveStockErrors(err))
  );
};


export const makeTransaction = transaction => dispatch => {
  return APIUtil.makeTransaction(transaction).then(payload => dispatch(receiveTransaction(payload)),
    ({ responseJSON }) => dispatch(receiveErrors(responseJSON)));
};

export const watchStock = (id, symbol) => dispatch => {
  return APIUtil.watchStock(id, symbol).then(watch => dispatch(receiveWatch(watch)));
};

export const removeWatch = id => dispatch => {
  return APIUtil.deleteWatch(id).then(({ id }) => dispatch(deleteWatch(id)));
};