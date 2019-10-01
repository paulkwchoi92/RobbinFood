

export const searchStocks =  (stocks, searchword) => {
  // debugger
  const search = searchword.toUpperCase()
  let res = [] 
  const stocksArr = Object.keys(stocks)
  stocksArr.forEach(ele => {
    if (res.length === 6) return res
    // debugger
    if (ele.startsWith(search)) {
      // debugger;
      return res.concat([stocks[ele]])
    }
  } )
  debugger
  return res
}

