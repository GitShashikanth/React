import { useState } from "react";
import "./App.css";
import RoadComponent from "./components/road/RoadComponent";
import MaterialState from "./components/context/MaterialState";

function App() {
  return (
    <>
      <div className="mainCpmponent">
        <h1>Conext API use case</h1>
        <p>
          First create a context, then inject the value inside that use a
          provider and then use that context in which ever the component you
          needed.
        </p>
        <MaterialState>
          <RoadComponent />
        </MaterialState>
      </div>
    </>
  );
}

export default App;
