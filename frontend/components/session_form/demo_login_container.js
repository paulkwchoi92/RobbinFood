import SessionForm from "./session_form"
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import { fetchAllStocks } from '../../actions/stock_actions'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'demo'

  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
