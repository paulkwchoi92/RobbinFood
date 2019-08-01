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

class PreLogNav extends React.Component {
  render() {
    return (
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
                  <Link to="/investing" className="inv-btn">
                    <span className="btn-n">Investing</span>
                  </Link>

                  <Link to="/cashmng" className="csh-mng-btn">
                    <span className="btn-n">Cash Management</span>
                    <div>
                      <span className="cmgs">COMING SOON</span>
                    </div>
                  </Link>

                  <div className="mores">
                    <div role="button" className="m-d m-dbord">
                      <div>MORE</div>
                      <svg className="m-arr" width="8" height="6" fill="none">
                        <path
                          d="M1 1L4 4L7 1"
                          stroke="inherit"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <RootFeatBox />
                  </div>
                </div>
                <div className="lft-cont-rgt">
                  <GreetingContainer />
                </div>
              </div>
            </div>
          </div>
        </nav>


      </div>
    );
  }
}

export default PreLogNav;
