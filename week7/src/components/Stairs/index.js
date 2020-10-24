import React, { Component } from "react";
import DisplayStairs from "../DisplayStairs";

class Stairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    let steps = 0;

    if (this.state.counter > 0) {
      steps = this.state.counter * 18;
    }
    return (
      <div className="Stairs" id="stairs-div">
        <h2>Stair Tracker</h2>
        <p>Each flight of stairs has 18 steps.</p>
        <p>Click the button to keep track of flights of stairs climbed.</p>
        <div class="buttons-div">
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            + Flight of Stairs
          </button>
          <button
            onClick={() => {
              this.setState({ counter: 0 });
            }}
          >
            Reset
          </button>
        </div>
        <DisplayStairs counter={this.state.counter} />

        <p>Total Flights of Stairs: {this.state.counter}</p>
        <p>Total Steps: {steps} Steps</p>
      </div>
    );
  }
}
export default Stairs;
