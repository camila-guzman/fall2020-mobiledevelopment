import React from "react";

function GoalReached(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch({ type: "goal-reached" });
        }}
      >
        Yes
      </button>
    </div>
  );
}

export default GoalReached;
