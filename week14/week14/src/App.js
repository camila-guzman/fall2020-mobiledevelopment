import React, { useReducer } from "react";
import { state, reducer } from "./components/AppState";

import IncreaseLaps from "./components/IncreaseLaps";
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
        <IncreaseLaps dispatch={dispatch} />
        <DisplayLaps currentState={currentState} />
        <ResetLaps dispatch={dispatch} />
      </div>
      <div className="goal-div">
        <GoalReached dispatch={dispatch} />
        <DisplayGoal currentState={currentState} />
        <GoalNotReached dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
