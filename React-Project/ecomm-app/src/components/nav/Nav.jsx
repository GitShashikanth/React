import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom"; // restricting the reload of the page

function Nav() {
  return (
    <div className="navContainer">
      <div className="rightPanel">
        <h3>Brand Name</h3>
      </div>
      <div className="leftPanel">
        <div className="navInfo">
          <Link to="/">Home</Link>
          <Link to="./about">AboutUs</Link>
          <Link to="./profile">Profile</Link>
          <Link to="./products">Products</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
