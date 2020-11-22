import React, { Component } from "react";
import DisplayStairs from "../DisplayStairs";

import { StyleSheet, View, Text, Button } from "react-native";

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
      <View style={styles.StairsView}>
        <Text style={styles.title}>Stair Tracker</Text>
        <Text style={styles.text}>Each flight of stairs has 18 steps.</Text>
        <Text style={styles.text}>
          Click the button to keep track of flights of stairs climbed.
        </Text>
        <View style={styles.buttonsView}>
          <Button
            onPress={() => this.setState({ counter: this.state.counter + 1 })}
            title="+ Flights of Stairs"
          />
        </View>
        <View style={styles.buttonsView}>
          <Button
            onPress={() => {
              this.setState({ counter: 0 });
            }}
            title="Reset"
          />
        </View>
        <View style={styles.displayStairsView}>
          <DisplayStairs counter={this.state.counter} />
        </View>
        <Text style={styles.text}>
          Total Flights of Stairs: {this.state.counter}
        </Text>
        <Text style={styles.text}>Total Steps: {steps} Steps</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StairsView: {
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
  displayStairsView: {
    backgroundColor: "#b8d7ff",
    color: "#001542",
    padding: 1,
    maxHeight: "220px",
    lineHeight: "0.5rem",
    overflow: "auto",
    marginBottom: "20px",
  },
});

export default Stairs;
