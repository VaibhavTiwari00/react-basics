import React, { useState, useContext } from "react";
import Logoimg from "../../assets/img/logo.png";
import About from "./About";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UserContext from "../utils/UserContext";

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
  const { user } = useContext(UserContext);

  const [isloggedin, setIsloggedin] = useState(false);
  // subscribe the store
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  
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
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart -- {cartItems.length}</Link>
          </li>
          <button onClick={loginbtnClick}>
            {isloggedin ? "Login" : "Logout"}
          </button>
          <li>
            <p>{user.name}</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
