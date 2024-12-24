import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ProfileContainer.css";

function ProfileContainer() {
  return (
    <div className="mainProfileContainer">
      <div className="leftProfileContainer">
        <div>
          <Link to="details">Details</Link>
        </div>
        <div>
          <Link to="address">Address</Link>
        </div>
        <div>
          <Link to="orders">Orders</Link>
        </div>
        <div>
          <Link to="wishlist">Wishlist</Link>
        </div>
      </div>
      <div className="rightProfileConatiner">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileContainer;
