import React, { useState } from "react";
import Logoimg from "../assets/img/logo.png";
import About from "./About";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <li>
            <Link to="/about">About</Link>
          </li>

          <Link to="/contact">Contact</Link>
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
