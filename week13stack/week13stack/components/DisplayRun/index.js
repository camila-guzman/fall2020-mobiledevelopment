import React, { Component } from "react";

class DisplayRun extends Component {
  render() {
    let laps = [];
    let miles = 0;

    for (let i = 0; i < this.props.counter; i++) {
      if (i === 3) {
        miles++;
        laps.push(
          <p class="mile" key={i}>
            {miles} mile
            <br />
          </p>
        );
      } else if ((i + 1) % 4 === 0) {
        miles++;
        laps.push(
          <p class="mile" key={i}>
            {miles} miles
          </p>
        );
      } else {
        laps.push(<p key={i}>- </p>);
      }
    }
    return (
      <div id="DisplayRun">
        <div class="display-run">{laps}</div>
      </div>
    );
  }
}
export default DisplayRun;
