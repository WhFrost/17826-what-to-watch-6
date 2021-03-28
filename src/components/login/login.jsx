import React, {useRef} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import Logo from "../main-page/logo";
import Footer from "../main-page/footer";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {AuthorizationStatus, AppRoute} from "../../const";
import Loading from "../loading/loading";
import LoginError from "../login/login-error";

const Login = (props) => {
  const {onSubmit, authorizationStatus} = props;

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    authorizationStatus === AuthorizationStatus.WAITING_AUTH &&
    <Loading /> ||
    authorizationStatus === AuthorizationStatus.AUTH &&
    <Redirect to={AppRoute.ROOT} /> ||
    authorizationStatus === AuthorizationStatus.NO_AUTH &&
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">

        <LoginError />

        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

