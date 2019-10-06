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

        <div>
          {/* <CompanyNewsContainer /> */}

        </div>
        </div>
      ) : ( <div/>)
    );
  }
}

export default withRouter(StockShow);
