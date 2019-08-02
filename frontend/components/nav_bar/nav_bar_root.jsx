import React from 'react'
import PreLogNav from './nav_bar_prelog';
import PostLogNav from './nav_bar_postlog'

const RootNavBar = ({ currentUser, logout }) => {
  const newNav = () => (
    <PreLogNav />
  );
  const loggedInNav = () => (
    <PostLogNav currentUser={currentUser} logout={logout}/>
  );

  return !currentUser ? newNav() : loggedInNav();
};

export default RootNavBar