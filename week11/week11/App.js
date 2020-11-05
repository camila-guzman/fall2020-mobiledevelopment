import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Camila</Card.Title>
        <Text>#1 Favorite Food: New York Style Cheesecake.</Text>
        <Text>#2 Favorite Food: Coconut Curry.</Text>
        <Button title="SUBMIT"></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
