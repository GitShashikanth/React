import React, { useContext } from "react";
import materialContext from "../context/MaterialContext";

function RoadComponent() {
  const vrfc = useContext(materialContext);

  return <div>{vrfc.value === "metal" ? <h2>This is valid</h2> : null}</div>;
}

export default RoadComponent;
