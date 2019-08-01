import React from "react";
import { Provider } from "react-redux";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import GreetingContainer from "../greetings/greetings_container";
import SignUpFormContainer from "../session_form/signup_form_container";
import LogInFormContainer from "../session_form/login_form_container";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nvb-ct">
          <div className="nvb-out">
            <div className="nvb-mid">
              <Link to="/" className="nvb-log-btn">
                <div clasName="nvb-log-out">
                  <FontAwesomeIcon className="logo" icon={faPizzaSlice} />
                  <span className="log-n">RobbinFood</span>
                </div>
              </Link>
              <div className="lft-cont">
                <div className="lft-cont-lft">
                  <ul className="sec2">
                    <li>
                      <Link to="/" className="inv-btn">
                        <span className="btn-n">Investing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="csh-mng-btn">
                        <span className="btn-n">Cash Management</span>
                        <div>
                          <span className="cmgs">COMING SOON</span>
                        </div>
                      </Link>
                    </li>
                    <div clasName="mores">
                      <div role="button" className="m-d">
                        <div>MORE</div>
                        <svg
                          className="m-arr"
                          width="8"
                          height="6"
                          fill="none"
                        >
                          <path d="M1 1L4 4L7 1"
                            stroke="inherit"
                          stroke-width="2"></path>
                        </svg>
                      </div>
                      
                    </div>
                  </ul>
                </div>
                <div className="lft-cont-rgt">
                  <GreetingContainer />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default NavBar;
