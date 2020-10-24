import React, { Component } from "react";
import DisplayRun from "../DisplayRun";

class Running extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    let distance = 0.0;
    let message = "";

    if (this.state.counter > 0) {
      distance = this.state.counter * 0.25;
    }

    if (this.state.counter === 40) {
      message = <p>Please take a break</p>;
    } else if (this.state.counter === 20) {
      message = <p>You should take a break soon!</p>;
    } else if (this.state.counter === 0) {
      message = "";
    } else if (this.state.counter % 4 === 0) {
      message = <p>Nice Work!</p>;
    }

    return (
      <div className="Running" id="run-div">
        <h2>Mile Tracker</h2>
        <p>Each lap is a 1/4 mile long.</p>

        <p>Click the button to keep track of your total laps:</p>

        <div class="buttons-div">
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
        </div>
        <DisplayRun counter={this.state.counter} />
        <p class="message">{message}</p>
        <p>Total Laps: {this.state.counter}</p>
        <p>Total Distance: {distance} Miles</p>
      </div>
    );
  }
}
export default Running;
