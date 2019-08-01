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
  render() {
    return (
      <div>
       hi
      </div>
    );
  }
}

export default PostLogNav;
