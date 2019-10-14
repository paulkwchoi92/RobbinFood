import React from "react";
import { Provider } from "react-redux";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom'
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import SearchBar from "./search_bar_container";

class PostLogNav extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.props.logout;
  }


  render() {
    return (
      <div>
        <div>
          <nav className="nvb-ct">
            <div className="nvb-out">
              <div className="nvb-mid">
                <Link to="/" className="nvb-log-btn">
                  <div className="nvb-log-out">
                    <FontAwesomeIcon className="logo" icon={faPizzaSlice} />
                    <span className="log-n">RobbinFood</span>
                  </div>
                </Link>
                <SearchBar/>
                <div className="lft-cont">
                  <div className="lft-cont-lft"></div>
                  
                  <button className="header-button" onClick={this.logout}>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(PostLogNav);
