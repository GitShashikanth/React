import React from "react";
import authContext from "./contextapi";
import { useContext } from "react";

function Login() {
  let { login } = useContext(authContext);
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
