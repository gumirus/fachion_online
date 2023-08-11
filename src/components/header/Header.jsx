import React from "react";
import { Logo } from "./Logo";
import NavBar from "./NavBar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Logo/>
          <NavBar/>
        </div>
      </div>
    </header>
  );
};

export default Header
