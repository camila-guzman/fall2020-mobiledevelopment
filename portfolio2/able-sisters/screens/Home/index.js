import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

function Home(props) {
  return (
    <View style={{ padding: 50, paddingTop: 10 }}>
      <Text style={styles.title}>Welcome to the Able Sisters' Mobile App!</Text>
      <Text style={styles.text}>
        Shop today's clothing selections and have them delivered to your home!
      </Text>
      <Text style={styles.smalltext}>
        To make sure we are able to serve all of the villagers on this beautiful
        island, we must place the following limit:
      </Text>
      <Text style={styles.smalltext}>
        Only one of each clothing item is allowed to be ordered through this
        app!
      </Text>
      <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>
        Don't worry, you can still visit us at Able Sisters to get more colors
        of each item.
      </Text>
      <Button title="Shop" onPress={() => props.navigation.navigate("Shop")} />
      <Button
        title="About Us"
        onPress={() => props.navigation.navigate("About")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    marginTop: 10,
  },
  smalltext: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default Home;
