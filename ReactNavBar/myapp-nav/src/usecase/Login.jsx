import { useContext } from "react";
import authContext from "./authContext";

function Login() {
  let { login } = useContext(authContext);
  return (
    <div>
      <h2>Login Component</h2>
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
