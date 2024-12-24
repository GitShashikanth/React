import "./Nav.css";
import authContext from "../usecase/authContext";
import { useContext } from "react";

function Nav({ state }) {
  let { logout } = useContext(authContext);
  return (
    <div className="navContainer">
      <div className="leftPanel">
        <h1>Brand Name</h1>
      </div>
      <div className="rightPanel">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
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
  );
}

export default Nav;
