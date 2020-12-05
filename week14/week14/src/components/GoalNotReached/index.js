import React from "react";

function GoalNotReached(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch({ type: "goal-not-reached" });
        }}
      >
        No
      </button>
    </div>
  );
}

export default GoalNotReached;
