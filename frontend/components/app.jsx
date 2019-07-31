import React from 'react';
import { Provider } from 'react-redux'

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div> 
    <header>
      <Link to="/" className="header-link-logo">
        <h1>RobbinFood</h1>
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