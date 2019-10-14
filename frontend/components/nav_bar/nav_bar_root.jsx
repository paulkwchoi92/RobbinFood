import React from 'react'
import PreLogNav from './nav_bar_prelog';
import PostLogNav from './nav_bar_postlog'

const RootNavBar = ({ currentUser, logout, checker }) => {
  const newNav = () => (
    <PreLogNav />
  );
  const loggedInNav = () => (
    <PostLogNav currentUser={currentUser} logout={logout}/>
  );

  return !checker ? newNav() : loggedInNav();
};

export default RootNavBar