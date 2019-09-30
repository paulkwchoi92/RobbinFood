import React from "react";
import { Provider } from "react-redux";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import GreetingContainer from "../greetings/greetings_container";
import SignUpFormContainer from "../session_form/signup_form_container";
import LogInFormContainer from "../session_form/login_form_container";
import CashManagement from "../extra_features/cash_mng";
import Blog from "../extra_features/blog";
import Careers from "../extra_features/careers";
import Help from "../extra_features/help";
import Investing from "../extra_features/investing";
import RootFeatBox from "../extra_features/root_feat_box";
import Snacks from "../extra_features/snacks";

class PostLogNav extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.props.logout
   
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
                <div className="lft-cont">
                  <div className="lft-cont-lft">

                  </div><h2 className="header-name">Hi, {this.props.currentUser.first_name} {this.props.currentUser.last_name}!</h2>
                  <button className="header-button" onClick={this.logout}>Log Out</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default PostLogNav;
