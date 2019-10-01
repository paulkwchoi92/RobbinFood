import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { fetchAllStocks } from '../../actions/stock_actions'
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
