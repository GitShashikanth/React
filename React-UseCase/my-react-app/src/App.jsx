import { useState } from "react";
import "./App.css";
import Nav from "./nav/Nav";
import Mains from "./usecase/Mains";
import authContext from "./usecase/contextapi";
import UseRef from "./useref/UseRef";
import Counter from "./useReducer/Counter";

function App() {
  let [state, setState] = useState(false);

  const login = () => {
    setState(true);
  };

  const logout = () => {
    setState(false);
  };
  return (
    <>
      {/* <authContext.Provider value={{ login, logout }}>
        <Nav state={state} />
        <Mains state={state} />
      </authContext.Provider> */}
      {/* <UseRef /> */}
      <Counter />
    </>
  );
}

export default App;
