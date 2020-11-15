import React, { useState } from "react";
import { StyleSheet, Button, Text, View, YellowBox } from "react-native";

//import ButtonChai from "./components/ButtonChai";

export default function App() {
  const [selected, setSelected] = useState(false);
  const [tea, setTea] = useState("tea");

  const displayChaiTea = () => {
    setSelected(true);
    setTea("Chai");
  };

  const displayEarlGreyTea = () => {
    setSelected(true);
    setTea("Earl Grey");
  };

  const displayGreenTea = () => {
    setSelected(true);
    setTea("Green");
  };

  return (
    <View style={styles.container}>
      {selected ? (
        <View>
          <Text style={styles.textTea}>You voted for {tea} tea!</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Vote for the best flavor of tea!</Text>

          <Button
            title="Chai"
            onPress={() => displayChaiTea()}
          ></Button>

          <Button
            title="Earl Grey"
            onPress={() => displayEarlGreyTea()}
          ></Button>

          <Button title="Green" onPress={() => displayGreenTea()}></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    marginBottom: "10px",
  },
  textTea: {
    color: "#fff",
    fontSize: "20px",
  },
});
