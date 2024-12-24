import React from "react";
import "./Nav.css";
import { useContext } from "react";
import authContext from "../usecase/contextapi";

function Nav({ state }) {
  let { logout } = useContext(authContext);

  return (
    <div className="navContainer">
      <div className="rightPanel">
        <h3>Brand Name</h3>
      </div>
      <div className="leftPanel">
        <div className="navInfo">
          <a href="./about">About</a>
          <a href="./services">Services</a>
          <a href="./contact us">Contact US</a>
          <a href="./settings">Settings</a>
          {state ? (
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;
