import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMoney } from "../../util/chart_util"

class StocksTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      numOfShares: 0,
      error: "",
      watching: this.props.inWatchList,
      formType: "Buy"
    };
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleWatch = this.handleWatch.bind(this)
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleWatch(e) {
    e.preventDefault();
    let watchlists = {
      user_id: this.props.userId,
      symbol: this.props.ticker
    };

    
    if (!this.state.watching) {
      this.setState({ watching: !this.state.watching }, () => {
        this.props.watchStock(watchlists);
      });
    } else {
      this.setState({ watching: !this.state.watching }, () => {
        this.props.removeWatch( this.props.watchId);
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
      if (this.state.formType === "Buy" && ((this.state.numOfShares * this.props.currentPrice) > this.props.buyingPower)){
        return this.setState({ error: "Not Enough Funds" }) 
      } else if (this.state.formType === "Sell" && (this.props.ownedShares < this.state.numOfShares)) {
        // debugger
        return  this.setState({ error: "Not Enough Shares" }) 
      }
    this.setState({ transacting: true });
    this.props
      .makeTransaction({
        user_id: this.props.userId,
        symbol: this.props.ticker,
        transaction_type: this.state.formType === "Buy" ? "buy" : "sell",
        stock_price: this.props.currentPrice,
        num_shares: this.state.numOfShares
      })
      .always(() => {
        this.setState({ numShares: 0 });
        this.setState({ transacting: false });
      });
  }

  clearErrors() {
    this.setState({errors: ""})
  }

  //------- ALL RENDERS


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
    // debugger
    return !this.state.watching ? (
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
    return (
      <div>
        <form className="transaction-form">
          <header className="transaction-header">
            <button type="button" className={this.state.formType === "Buy" ? "toggle-button selected" : "toggle-button"}
              onClick={() => {
                this.setState({ formType: "Buy" });
                this.clearErrors()
              }}>
              Buy {this.props.symbol}
            </button>
            {this.props.ownedShares ? <button type="button" className={this.state.formType === "Sell" ? "toggle-button selected" : "toggle-button"}
              onClick={() => {
                this.setState({ formType: "Sell" });
                this.clearErrors()
              }}>Sell {this.props.symbol}</button> : <></>}
          </header>
          <label>Shares
          <input value={this.state.numOfShares} min="0" onChange={this.handleChange("numOfShares")} type="number" placeholder="0" step="1" />
          </label>
          <div className={`form-div ${this.props.ownedShares ? "bordered" : ""}`}>
            <span>Market Price</span>
            {`${formatMoney(this.props.currentPrice)}`}
          </div>
        <div className="estimated-cost">
          <span>
            Estimated {`${this.state.formType === "Buy" ? "Cost" : "Credit"}`}
          </span>
          {`${
            this.state.numOfShares > 0
              ? formatMoney(this.state.numOfShares * this.props.currentPrice)
              : 0
            }`}
          </div>
          <div id="error-container" className={this.state.errors > 0 ? "form-div grow" : "form-div"}>
            {this.state.error}
          </div>
          <div id="submit-div">
            <button id="transaction-submit"  onClick={this.handleSubmit}>{`Submit ${this.state.formType}` }</button>
          </div>
          <div 
            id="info-div">
            {this.state.formType === "Buy" ?
              `${formatMoney(this.props.buyingPower)} Buying Power Available` :
              `${this.props.ownedShares ? this.props.ownedShares : 0} Shares Available`}
          </div> 
        </form>
        {this.props.ownedShares ? <div/> : this.renderWatchlistButton()}
      </div>
    );
  }
}

export default StocksTransaction