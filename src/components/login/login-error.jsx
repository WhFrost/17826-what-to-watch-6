import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {LOGIN_ERROR_MESSAGE} from "../../const";

const LoginError = (props) => {
  const {isLoginError} = props;

  if (isLoginError) {
    return (
      <div className="sign-in__message">
        <p>
          {LOGIN_ERROR_MESSAGE}
        </p>
      </div>
    );
  } else {
    return ``;
  }
};

LoginError.propTypes = {
  isLoginError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoginError: state.isLoginError,
});

export {LoginError};
export default connect(mapStateToProps, null)(LoginError);
