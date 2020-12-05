import React from "react";

function ResetLaps(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch({ type: "reset" });
        }}
      >
        Reset Laps
      </button>
    </div>
  );
}

export default ResetLaps;
