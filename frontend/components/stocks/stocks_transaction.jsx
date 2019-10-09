import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class StocksTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      numOfShares: 0,
      error: "",
      watching: this.props.inWatchList,
      formType: "buy"
    };
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleWatch(e) {
    e.preventDefault();
    stockParams = {
      user_id: this.props.userId,
      symbol: this.props.ticker
    };
    if (this.props.inWatchList) {
      this.setState({ watching: !this.state.watching }, () => {
        this.props.watchStock(stockParams);
      });
    } else {
      this.setState({ watching: !this.state.watching }, () => {
        this.props.removeWatch(stockParams);
      });
    }
  }

  handleSubmit(e) {
    if (!this.props.user) {
      this.props.history.push("/signup");
    }
    e.preventDefault();
    this.setState({ transacting: true });
    this.props
      .makeTransaction({
        user_id: this.props.userId,
        symbol: this.props.ticker,
        transaction_type: this.state.form === "Buy" ? "purchase" : "sale",
        stock_price: this.props.currentPrice,
        num_shares: this.state.numOfShares
      })
      .always(() => {
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
        <div className="toggle-button selected">Buy {this.props.ticker}</div>
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
    // shows if not in owned
    return this.state.watching ? (
      <button className="watchlist-button" onClick={this.handleWatch}>
        Add to Watchlist
      </button>
    ) : (
      <button className="watchlist-button" onClick={this.handleWatch}>
        Remove from Watchlist
      </button>
    );
  }

  render() {
    return <div>
      <form className="transaction-form">
        <header className="transaction-header">

        </header>

      </form>

      {this.renderWatchlistButton}
    </div>;
  }
}
