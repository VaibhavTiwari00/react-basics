import React, { useState } from "react";
import Logoimg from "../assets/img/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={Logoimg} alt="logo" />
      </a>
    </div>
  );
};

const Header = () => {
  const [isloggedin, setIsloggedin] = useState(false);

  const loginbtnClick = () => {
    isloggedin ? setIsloggedin(false) : setIsloggedin(true);
  };
  return (
    <header>
      <Logo />
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button onClick={loginbtnClick}>
            {isloggedin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
