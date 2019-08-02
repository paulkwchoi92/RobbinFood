import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup  } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
