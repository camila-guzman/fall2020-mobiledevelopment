import React, { Component } from "react";

class Stairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="Stairs" id="stairs-div">
        <h4>We're climbing stairs!</h4>
        <p>Each flight of stairs has 60 steps.</p>
        <p>Click the button to keep track of flights of stairs climbed.</p>
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
        <p>Total Flights of Stairs: {this.state.counter}</p>
      </div>
    );
  }
}
export default Stairs;
