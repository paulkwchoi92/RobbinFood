import React from "react";
import PreLogHome from "./prelog_homepage";
import PostLogHomeContainer from "./postlog_homepage_container";

class RootHomePage extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return <PostLogHomeContainer logout={logout} />;
    } else {
      return <PreLogHome />;
    }
  }
}

export default RootHomePage;

