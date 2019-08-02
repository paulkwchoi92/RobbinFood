import React from 'react'
import PreLogHome from './nav_bar_prelog';
import PostLogHome from './nav_bar_postlog'

const RootHomePage = ({ currentUser, logout }) => {
  const newHome = () => (
    <PreLogNav />
  );
  const loggedHome = () => (
    <PostLogNav currentUser={currentUser} logout={logout} />
  );

  return !currentUser ? newHome() : loggedHome();
};

export default RootNavBar