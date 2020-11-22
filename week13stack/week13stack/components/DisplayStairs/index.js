import React, { Component } from "react";

class DisplayStairs extends Component {
  render() {
    let flights = [];

    for (let i = 0; i < this.props.counter; i++) {
      flights.unshift(
        <p class="flight-num" key={i}>
          {i + 1}
        </p>
      );
    }
    return (
      <div id="DisplayStairs">
        <div class="display-stairs">{flights}</div>
      </div>
    );
  }
}
export default DisplayStairs;
