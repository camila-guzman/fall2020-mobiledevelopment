import React, { Component } from "react";
import DisplayRun from "../DisplayRun";

import { StyleSheet, View, Text, Button } from "react-native";

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
      message = <Text>Please take a break</Text>;
    } else if (this.state.counter === 20) {
      message = <Text>You should take a break soon!</Text>;
    } else if (this.state.counter === 0) {
      message = "";
    } else if (this.state.counter % 4 === 0) {
      message = <Text>Nice Work!</Text>;
    }

    return (
      <View style={styles.RunningView}>
        <Text style={styles.title}></Text>
        <Text style={styles.text}>Each lap is a 1/4 mile long.</Text>
        <Text style={styles.text}>
          Click the button to keep track of your total laps:
        </Text>

        <View style={styles.buttonsView}>
          <Button
            title="+ Lap"
            onPress={() => this.setState({ counter: this.state.counter + 1 })}
          />
        </View>

        <View style={styles.buttonsView}>
          <Button
            title="Reset"
            onPress={() => {
              this.setState({ counter: 0 });
            }}
          />
        </View>
        <View style={styles.displayRunningView}>
          <DisplayRun counter={this.state.counter} />
        </View>

        <Text style={styles.message}>{message}</Text>
        <Text style={styles.text}>Total Laps: {this.state.counter}</Text>
        <Text style={styles.text}>Total Distance: {distance} Miles</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RunningView: {
    padding: 20,
  },
  title: {
    color: " #001542",
    marginBottom: "20px",
    fontSize: "30px",
  },
  text: {
    marginBottom: "20px",
  },
  buttonsView: {
    maxWidth: "300px",
    padding: 20,
  },
  displayRunningView: {
    backgroundColor: "#b8d7ff",
    color: "#001542",
    padding: 1,
    maxHeight: "220px",
    lineHeight: "0.5rem",
    overflow: "auto",
    marginBottom: "20px",
  },
  message: {
    backgroundColor: "#b8d7ff",
    color: "#002c8b",
    textAlign: "center",
  },
});

export default Running;
