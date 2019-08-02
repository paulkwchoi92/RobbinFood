import React from 'react'
import PreLogHome from './prelog_homepage';
import PostLogHome from './postlog_homepage';

const RootHomePage = ({ currentUser, logout }) => {
  const newHome = () => (
    <PreLogHome />
  );
  const loggedHome = () => (
    <PostLogHome currentUser={currentUser} logout={logout} />
  );

  return !currentUser ? newHome() : loggedHome();
};

export default RootHomePage