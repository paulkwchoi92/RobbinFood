import React from "react";
import CompanyNewsContainer from "../news/company_new_container";
import { withRouter } from "react-router-dom";
import StockShowDetail from './stock_show_detail'
import RootNavBar from "../nav_bar/nav_bar_root_container";
class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStockInfo: ""
    }
  }

  componentWillMount() {
    // debugger 
    this.props.fetchStock(this.props.match.params.symbol)
    this.props.fetchUser(this.props.currentUserId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentStockInfo: nextProps.currentStock})
  }

  render() {
    return (
      this.state.currentStockInfo ? (
      <div>
          <RootNavBar/>
          <StockShowDetail details={this.state.currentStockInfo}/>
          {/* missing market cap, hightoday, and avg volume */}
        <div>
          {/* <CompanyNewsContainer company={this.state.currentStockInfo.name}/> */}

        </div>
        </div>
      ) : ( <div/>)
    );
  }
}

export default withRouter(StockShow);
