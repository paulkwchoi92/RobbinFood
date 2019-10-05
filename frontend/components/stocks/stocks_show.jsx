import React from "react";
import CompanyNewsContainer from "../news/company_new_container";
import { withRouter } from "react-router-dom";
import RootNavBar from "../nav_bar/nav_bar_root_container";
class StockShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // debugger 
    this.props.fetchStock(this.props.match.params.symbol)
  }

  render() {
    return (
      <div>
          <RootNavBar/>
        <div className="stocks-show-container">
          <CompanyNewsContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(StockShow);
