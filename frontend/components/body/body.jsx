import React from 'react'
import RootHomePageContainer from "../homepage/root_homepage_container"
import RootNavBarContainer from '../nav_bar/nav_bar_root_container'

const Body = () => (
  <div>
    <div className="maincontents">
      <RootHomePageContainer />
      <RootNavBarContainer />
    </div>
  </div>
)

export default Body