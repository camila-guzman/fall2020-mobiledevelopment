import "react-native-gesture-handler";
import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>
        Track your laps with the Lap Tracker or flights of stairs with the
        StairMaster.
      </Text>
      <View style={styles.buttonsView}>
        <Button
          title="Home"
          color="#001542"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
      <View style={styles.buttonsView}>
        <Button
          title="Lap Tracker"
          color="#001542"
          onPress={() => props.navigation.navigate("Running")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="StairMaster"
          color="#001542"
          onPress={() => props.navigation.navigate("Stairs")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001542",
    alignItems: "center",
    justifyContent: "center",
    color: "#b8d7ff",
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
    padding: 20,
  },
});

export default Home;
