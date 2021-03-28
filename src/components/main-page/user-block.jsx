import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../store/api-actions";
import {AuthorizationStatus, AppRoute} from "../../const";

const UserBlock = (props) => {
  const {authorizationStatus, onLogout} = props;

  return <>
    {
      authorizationStatus === AuthorizationStatus.AUTH &&
      <div className="user-block">
        <a
          className="user-block__link"
          onClick={onLogout}
          style={{
            cursor: `pointer`,
            marginBottom: `15px`
          }}
        >
          Sign out
        </a>
        <div
          className="user-block__avatar"
          style={{
            marginLeft: `10px`
          }}
        >
          <Link to={AppRoute.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </div>
      ||
      <div className="user-block">
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      </div>
    }
  </>;
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  }
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
