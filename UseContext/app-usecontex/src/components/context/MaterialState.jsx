import React from "react";
import MaterialContext from "./MaterialContext";

function MaterialState(props) {
  const state = { id: 1, value: "metal" };

  return (
    <div>
      <MaterialContext.Provider value={state}>
        {props.children}
      </MaterialContext.Provider>
    </div>
  );
}

export default MaterialState;
