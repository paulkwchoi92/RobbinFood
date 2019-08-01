import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import RootNavBarContainer from './nav_bar/nav_bar_root_container'
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import CashManagement from "./extra_features/cash_mng";
import Blog from "./extra_features/blog";
import Careers from "./extra_features/careers";
import Help from "./extra_features/help";
import Investing from "./extra_features/investing";
import Snacks from "./extra_features/snacks";

const App = () => (
  <div> 
    <RootNavBarContainer />

    <Switch>
      <Route exact path="/snacks" component={Snacks} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/investing" component={Investing} />
      <Route exact path="/cashmng" component={CashManagement} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
)

export default App