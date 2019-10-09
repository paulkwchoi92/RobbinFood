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

  handleSubmit(e) {
    if (!this.props.user) {
      this.props.history.push("/signup");
    }
    e.preventDefault();
    this.setState({ transacting: true });
    this.props.makeTransaction({
      user_id: this.props.user.id,
      symbol: this.props.ticker,
      transaction_type: this.state.buySell === "Buy" ? "purchase" : "sale",
      stock_price: this.props.price,
      num_shares: this.state.numShares,
    }).always(() => {
      this.setState({ numShares: 0 });
      this.setState({ transacting: false });
    });
  }

  //------- ALL RENDERS
  renderHeaders() {
    return this.props.ownedShares ? (
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
    return this.state.switch === "false" ? (
      <div>
        <div>Estimated Cost</div>
        <div>{this.state.numOfShares * this.props.marketPrice}</div>
      </div>
    ) : (
      <div>
        <div>Estimated Credit</div>
        <div>{this.state.numOfShares * this.props.marketPrice}</div>
      </div>
    );
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

  renderWatchlistButton() { // shows if not in owned
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
