import React from "react";
import Logo from "./logo";
import UserBlock from "./user-block";

const Header = () => {
  return <>
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header movie-card__head">
      <Logo />
      <UserBlock />
    </header>
  </>;
};

export default Header;
