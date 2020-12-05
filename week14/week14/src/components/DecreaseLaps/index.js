import React from "react";

function DecreaseLaps(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch({ type: "decrement" });
        }}
      >
        - Lap
      </button>
    </div>
  );
}

export default DecreaseLaps;
