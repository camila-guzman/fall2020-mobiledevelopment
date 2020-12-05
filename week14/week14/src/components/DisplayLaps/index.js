import React from "react";

function DisplayLaps(props) {
  return <h3>Total Laps: {props.currentState.count}</h3>;
}

export default DisplayLaps;
