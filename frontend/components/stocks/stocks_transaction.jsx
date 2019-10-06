import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class StocksTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      numOfShares: 0,
      error: ""
    };
  }

  //------- ALL RENDERS
  renderHeaders() {
    return this.props.owned ? (
      <div>
        <div>Buy {this.props.ticker}</div>
        <div>Sell {this.props.ticker}</div>
      </div>
    ) : (
      <div>
        <div>Buy {this.props.ticker}</div>
      </div>
    );
  }
  renderEstimatedCost() {
    return <div>{this.state.numOfShares * this.props.marketPrice}</div>;
  }

  renderReviewButton() {
    return (
      <div>
        <button>Review Order</button>
      </div>
    );
  }
  renderErrors() {
    return (
      <div className="transaction-error-container">
        <div className="transaction-error-header">
          <i class="fas fa-exclamation-circle"></i>
          Error
        </div>
        <div className="transaction-error-msg">{this.state.error}</div>
      </div>
    );
  }

  renderWatchlistButton() {
    return this.props.inWatchList ? (
      <div className="watchlist-button-container">
        <button className="watchlist-button">Add to Watchlist</button>
      </div>
    ) : (
      <div className="watchlist-button-container">
        <button className="watchlist-button">Remove from Watchlist</button>
      </div>
    );
  }

  render() {
    return <div></div>;
  }
}
