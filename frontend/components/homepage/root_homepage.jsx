import React from 'react'
import PreLogHome from './prelog_homepage';
import PostLogHomeContainer from './postlog_homepage_container';

const RootHomePage = ({ currentUser, logout }) => {
  const newHome = () => (
    <PreLogHome />
  );
  const loggedHome = () => (
    <PostLogHomeContainer currentUser={currentUser} logout={logout} />
  );

  return !currentUser ? newHome() : loggedHome();
};

export default RootHomePage