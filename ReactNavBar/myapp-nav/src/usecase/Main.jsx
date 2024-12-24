import React from "react";
import Home from "./Home";
import Login from "./Login";
import "./css/Main.css";

function Main({ state }) {
  return <div>{state ? <Home /> : <Login />}</div>;
}

export default Main;
