export const searchStocks = (stocks, searchword) => {
  const search = searchword.toUpperCase();
  let res = [];
  const stocksArr = Object.keys(stocks);
  stocksArr.forEach(ele => {
    if (res.length === 6) return res;
    if (ele.startsWith(search)) {
      res.push(stocks[ele]);
    }
  });

  return res;
};
