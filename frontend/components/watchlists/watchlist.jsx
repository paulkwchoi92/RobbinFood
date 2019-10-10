import React from 'react';
import WatchlistItem from './watchlist_item';

export default props => {
  
  return (
    <div id="watchlist">
      {WatchlistSection("Stocks", props.ownedStocks)}
      {WatchlistSection("Watchlist", props.watchedStocks)}
    </div>
  ) 
}

const WatchlistSection = (header, stocks) => {
  if (stocks) {
    return (
      <>
        <div className="watchlist-header">
          <h3>{header}</h3>
        </div>
        <ul className="flex-column">
          {stocks.map(stock => <WatchlistItem key={stock.symbol} stock={stock} />)}
        </ul>
      </>
    )
  } else {
    return (<div/>)
    }
    
}