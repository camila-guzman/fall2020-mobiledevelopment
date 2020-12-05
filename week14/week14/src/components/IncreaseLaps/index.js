import React from "react";

function IncreaseLaps(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch({ type: "increment" });
        }}
      >
        + Lap
      </button>
    </div>
  );
}

export default IncreaseLaps;
