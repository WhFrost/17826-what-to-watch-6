import React from "react";
import Logo from "./main-page/logo";
import Footer from "./main-page/footer";

const PageNotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">404</h1>
      </header>

      <div className="sign-in user-page__content">
        <p>Page not found</p>
      </div>

      <Footer />
    </div>
  );
};

export default PageNotFound;
