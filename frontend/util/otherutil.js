import moment from 'moment';
import tz from 'moment-timezone';

export const countStocks = (transactions, date = moment()) => {
  // debugger
  const shares = {};
  // debugger
  for (let i = 0; i < transactions.length; i++) {
    if (date.isSameOrBefore(transactions[i].time)) return shares; //transaction array is in order, stop counting if we reach transactions after our date.
    const symbol = transactions[i].symbol;
    const numShares = transactions[i].numShares;
    const type = transactions[i].transactionType;
    if (!shares[symbol]) shares[symbol] = numShares; //assuming we have to start with purchase
    else if (type === "buy") {
      shares[symbol] += numShares;
    } else {
      shares[symbol] -= numShares;
      if (shares[symbol] === 0) delete shares[symbol];
    }
  }
  return shares;
};