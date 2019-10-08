import React from "react";
import CompanyNewsContainer from "../news/company_new_container";
import { withRouter } from "react-router-dom";
import StockShowDetail from "./stock_show_detail";
import RootNavBar from "../nav_bar/nav_bar_root_container";

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStockInfo: "",
      watchLists: [],
      ownedStocks: null
    };
  }

  componentWillMount() {
    // debugger
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

  insideWatchLists(symbol) {}

  render() {
    // debugger;
    return this.state.watchLists && this.state.currentStockInfo ? (
      <div>
        <RootNavBar />
        <StockShowDetail details={this.state.currentStockInfo} />
        {/* missing market cap, hightoday, and avg volume */}
        {/* <StockTransactionContainer 
        ticker={this.props.match.params.symbol} 
        inWatchList={this.state.watchLists.includes(this.props.match.params.symbol)} 
        ownedShares={this.state.ownedStocks[this.props.match.params.symbol]}
        buyingPower={this.props.buyingPower}
        */}
        <div>
          {/* <CompanyNewsContainer company={this.state.currentStockInfo.name}/> */}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default withRouter(StockShow);
