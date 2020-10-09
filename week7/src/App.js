import React, { Component } from "react";
import "./App.css";
import Running from "./components/Running";
import Stairs from "./components/Stairs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Running />
          <Stairs />
        </header>
      </div>
    );
  }
}

export default App;
