export const watchedStocks = state => {
  const currentUser = state.session.id;
  const watchList = state.entities.watchedStocks;
  const res = [];
  Object.keys(watchList).forEach(id => {
    if (watchList[id].userId === currentUser) {
      res.push(watchList[id]);
    }
  });
  return res;
};

export const transactionArray = (state, symbol = null) => { //optional only for specific stock.
  const res = [];
  const currentUser = state.session.id;
  const transactions = state.entities.transactions;
  Object.keys(transactions).forEach(id => {
    const transaction = transactions[id];
    if (transaction.userId === currentUser && (symbol ? transaction.symbol === symbol : true)) {
      transaction.time = moment(transaction.time);
      res.push(transaction);
    }
  });
  return res.sort((transaction1, transaction2) => transaction1.time.isBefore(transaction2.time));
};
