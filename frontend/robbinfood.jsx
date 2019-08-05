import React from 'react';
import ReactDOM from 'react-dom';
// import { logIn, logOut, signUp } from './util/session';
import configureStore from './store/store';
import Root from './components/root.jsx';





document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  // window.logIn = logIn;
  // window.logOut = logOut;
  // window.signUp = signUp;
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchBenches = fetchBenches;
});

