import React, { Component } from "react";
import "./App.css";
import Running from "./components/Running";
import Stairs from "./components/Stairs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-nav">
          <nav>
            <a href="#DisplayStairs">Stair Tracker</a>
            <a href="#DisplayRun">Mile Tracker</a>
          </nav>
        </div>

        <div className="App-body">
          <Stairs />
          <Running />
        </div>
      </div>
    );
  }
}

export default App;
