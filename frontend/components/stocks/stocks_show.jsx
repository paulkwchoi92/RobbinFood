import React from "react";
import CompanyNewsContainer from "../news/company_new_container";
import { withRouter } from "react-router-dom";
import StockShowDetail from "./stock_show_detail";
import RootNavBar from "../nav_bar/nav_bar_root_container";
import StockChart from "./stock_chart";
import Loader from "../loader";
import StockTransactionContainer from "./transaction_container";
class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStockInfo: "",
      watchLists: [],
      ownedStocks: null
    };
    this.insideWatchLists = this.insideWatchLists.bind(this);
  }

  componentWillMount() {
    this.props.fetchStock(this.props.match.params.symbol);
    this.props.fetchUser(this.props.currentUserId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ownedStocks) {
      this.setState({
        currentStockInfo: nextProps.currentStock,
        watchLists: nextProps.watchLists,
        ownedStocks: nextProps.ownedStocks
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.symbol !== this.props.match.params.symbol) {
      this.props.fetchStock(this.props.match.params.symbol);
      this.props.fetchUser(this.props.currentUserId);
    }
  }

  insideWatchLists(symbol) {
    this.state.watchLists.forEach(ele => {
      if (ele.symbol === symbol) return true;
    });
    return false;
  }

  render() {
    if (
      !this.props.charts ||
      !this.props.stockinfo ||
      !this.props.currentStock
    ) {
      return <Loader id={"loading-center"} />;
    }
    if (this.state.currentStockInfo.symbol !== this.props.match.params.symbol) {
      return <Loader id={"loading-center"} />;
    }
    let watchcheck = false;
    let watchid;
    if (this.state.watchLists) {
      this.state.watchLists.forEach(ele => {
        if (ele.symbol === this.props.match.params.symbol) {
          watchcheck = true;
          watchid = ele.id;
        }
      });
    }
        // debugger
    return this.state.watchLists &&
      this.state.currentStockInfo &&
      this.props.charts ? (
      <div className="stock-show-top">
        <div className="fixed stocks_show_nav">
          <RootNavBar />
        </div>
        <main className="main-page">
          <div>
            <StockChart
              prevClose={this.props.stockinfo.data["0"].close_yesterday}
              name={this.props.stockinfo.data["0"].name}
              charts={this.props.charts}
            />
            <StockShowDetail
              details={this.state.currentStockInfo}
              details2={this.props.stockinfo.data["0"]}
            />
            <CompanyNewsContainer company={this.state.currentStockInfo.name} />
          </div>
          <div className="stocks-transaction-container">
            <div className="fixed">
              <StockTransactionContainer
                userId={this.props.currentUserId}
                ticker={this.props.match.params.symbol}
                currentPrice={this.props.stockinfo.data["0"].price}
                inWatchList={watchcheck}
                ownedShares={
                  this.state.ownedStocks[this.props.match.params.symbol]
                }
                watchId={watchid}
                buyingPower={this.props.buyingPower}
              />
            </div>
          </div>
        </main>
      </div>
    ) : (
      <Loader id={"loading-center"} />
    );
  }
}

export default withRouter(StockShow);
