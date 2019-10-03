import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import CashManagement from "./extra_features/cash_mng";
import Blog from "./extra_features/blog";
import Careers from "./extra_features/careers";
import Help from "./extra_features/help";
import Investing from "./extra_features/investing";
import Snacks from "./extra_features/snacks";
import SessionFormV2Container from "./session_form/session_formv2_container.jsx";
import Body from "./body/body";
import DemoLogInContainer from "./session_form/demo_login_container";
import RootNavBar from "./nav_bar/nav_bar_root_container";
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Body} />
      {/* <Route path="/" component={RootNavBar} /> */}
      <Route exact path="/snacks" component={Snacks} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/investing" component={Investing} />
      <Route exact path="/cashmng" component={CashManagement} />
      <AuthRoute exact path="/demologin" component={DemoLogInContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
// < AuthRoute exact path = "/login" component = { SessionFormV2Container } />
//   <AuthRoute exact path="/signup" component={SessionFormV2Container} />

// < AuthRoute exact path = "/login" component = { LogInFormContainer } />
//   <AuthRoute exact path="/signup" component={SignUpFormContainer} />
// < AuthRoute exact path = "/" component = { RootNavBarContainer } />
//   <ProtectedRoute exact path="/" component={RootNavBarContainer} />
