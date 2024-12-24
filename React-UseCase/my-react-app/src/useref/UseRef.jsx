import React from "react";
import { useRef, useState } from "react";

function UseRef() {
  let num = useRef(15);

  let [state, setState] = useState(55);

  var varNum = 5;

  const updateState = () => {
    setState(state + 1);
  };

  const updateRef = () => {
    num.current = num.current + 1;
  };

  const updateVariable = () => {
    varNum = varNum + 1;
  };

  const printNumbers = () => {
    console.log("State :", state);
    console.log("use ref :", num.current);
    console.log("var num :", varNum);
  };

  return (
    <div>
      <button onClick={updateState}>Increment state</button>
      <button onClick={updateRef}>Increment Ref</button>
      <button onClick={updateVariable}>Increment varibale</button>
      <button onClick={printNumbers}>Print values</button>
    </div>
  );
}

export default UseRef;
