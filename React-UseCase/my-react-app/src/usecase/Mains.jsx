import React from "react";
import Home from "./Home";
import Login from "./Login";

function Mains({ state }) {
  return <div>{state ? <Home /> : <Login />}</div>;
}

export default Mains;
