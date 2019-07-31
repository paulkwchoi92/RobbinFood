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
        <header>
          <nav className="nvb-ct">
            <h1 className="header-link-logo">
              <Link to="/">
                <FontAwesomeIcon className="logo" icon={faPizzaSlice} />
                <p>RobbinFood</p>
              </Link>
            </h1>
            <Link to="/" className="i-l">
              <p>Investing</p>
            </Link>
            <Link to="/" className="cm-l">
              <p>Cash Management</p>
            </Link>
            <GreetingContainer />
          </nav>
        </header>
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
      </div>
    );
  }
}

export default NavBar;
