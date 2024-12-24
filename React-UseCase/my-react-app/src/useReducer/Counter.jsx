import React, { useReducer } from "react";
import reducer from "./reducer";

// we should define the reducer function outside here.
//Else it is good practice to define the function in the separate file.
//useReducer(reducer, initial value)
//State can be updated using reducer function only
//To call reducer function we have to call dispatch and internally dispatch will be call the reducer
// We cannot call reducer directly

function Counter() {
  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>Count: {state}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INC", count: 1 }); //action object
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INC", count: 3 });
        }}
      >
        Increment Count By 3
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DEC", count: 1 });
        }}
      >
        Decrement Count
      </button>
      <button
        onClick={() => {
          dispatch();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
