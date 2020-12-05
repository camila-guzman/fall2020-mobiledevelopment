import React, { useReducer } from "react";
import { state, reducer } from "./components/AppState";

import IncreaseLaps from "./components/IncreaseLaps";
import DecreaseLaps from "./components/DecreaseLaps";
import ResetLaps from "./components/ResetLaps";
import DisplayLaps from "./components/DisplayLaps";
import GoalReached from "./components/GoalReached";
import GoalNotReached from "./components/GoalNotReached";
import DisplayGoal from "./components/DisplayGoal";

import "./App.css";

function App() {
  // use the useReducer() to create a dispatcher function
  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">Track Your Miles!</header>
      <div className="laps-div">
        <DisplayLaps currentState={currentState} />
        <div className="buttons-div">
          <IncreaseLaps className="small-btn" dispatch={dispatch} />
          <DecreaseLaps className="small-btn" dispatch={dispatch} />
          <ResetLaps className="reset-button" dispatch={dispatch} />
        </div>
      </div>
      <div className="goal-div">
        <h3>Did You Reach Your Goal Today?</h3>
        <div className="buttons-div">
          <GoalReached className="small-btn" dispatch={dispatch} />
          <GoalNotReached className="small-btn" dispatch={dispatch} />
        </div>
        <DisplayGoal currentState={currentState} />
      </div>
    </div>
  );
}

export default App;
