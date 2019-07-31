import React from 'react';
import { Provider } from 'react-redux'
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greetings/greetings_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
const App = () => (
  <div> 
    <header>
      <Link to="/" className="header-link-logo">
        <FontAwesomeIcon icon={faPizzaSlice} /><h1>RobbinFood</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  </div>
)

export default App