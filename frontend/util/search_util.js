

export const searchStocks = (stocks, searchword) => {
  // debugger
  const search = searchword.toUpperCase()
  let res = [] 
  const stocksArr =  Object.keys(stocks)
  // const searchKeys = stocksArr.filter(key => key.startsWith(search)).slice(0, 6)
  // const check = searchKeys.map(ele => stocks.ele)
  // debugger
  stocksArr.forEach(ele => {
    if (res.length === 6) return res
    if (ele.startsWith(search)) {
      // debugger;
      res.push(stocks[ele])
    }
    
    // debugger
  } )

  // debugger
  return res
  // return stocksArr.length 
}

