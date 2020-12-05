import React from "react";

function DisplayGoal(props) {
  // check if the goal was reached
  if (props.currentState.goal === 1) {
    // display to user
    return <p className="message">Congrats, You Reached Your Goal!!!</p>;
  } else if (props.currentState.goal === 0) {
    // display nothing if goal wasn't reached
    return (
      <p className="message">
        Keep going if you are able! It's okay to take a break and drink some
        water.
      </p>
    );
  } else {
    return null;
  }
}

export default DisplayGoal;
