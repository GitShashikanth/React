import "./App.css";
import Main from "./usecase/Main";
import Nav from "./nav/Nav";
import { useState } from "react";
import authContext from "./usecase/authContext";

function App() {
  const [state, setState] = useState(true);

  const login = () => {
    setState(true);
  };

  const logout = () => {
    setState(false);
  };
  return (
    <div>
      <authContext.Provider value={{ login, logout }}>
        <Nav state={state} />
        <Main state={state} />
      </authContext.Provider>
    </div>
  );
}

export default App;
