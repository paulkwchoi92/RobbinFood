import React from "react";
import CompanyNewsContainer from "../news/company_new_container";
import { withRouter } from "react-router-dom";
import { NavRootBar} from '../nav_bar/nav_bar_root_container'
class StockShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <div>
          <NavRootBar/>
        <div className="stocks-show-container">
          <CompanyNewsContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(StockShow);
