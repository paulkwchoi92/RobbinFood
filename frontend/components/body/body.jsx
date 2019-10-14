import React from "react";
import RootHomePageContainer from "../homepage/root_homepage_container";
import RootNavBarContainer from "../nav_bar/nav_bar_root_container";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {}
  render() {
    return (
      <div>
        <div className="maincontents">
          <RootHomePageContainer />
          <RootNavBarContainer />
        </div>
      </div>
    );
  }
}

export default Body;
