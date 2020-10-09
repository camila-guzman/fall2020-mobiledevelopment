import React, { Component } from "react";

class Running extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="Running" id="run-div">
        <h4>We're running!</h4>
        <p>Each lap is a 1/4 mile long.</p>
        <p>Click the button to keep track of your total laps:</p>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          + Lap
        </button>
        <button
          onClick={() => {
            this.setState({ counter: 0 });
          }}
        >
          Reset
        </button>
        <p>Total Laps: {this.state.counter}</p>
      </div>
    );
  }
}
export default Running;
