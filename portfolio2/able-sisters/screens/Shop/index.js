import React from "react";

import { StyleSheet, View, Text, Button, Image } from "react-native";

function Shop(props) {
  return (
    <View style={{ padding: 50 }}>
      <Text style={styles.title}>Today's Selections!</Text>
      <Text> Make sure to check back tomorrow for brand new clothes.</Text>

      <View style={styles.flexWrap}>
        <View style={styles.itemGroup}>
          <Image
            source={require("./images/Flower_Sunglasses_(Red)_NH_Icon.png")}
            style={styles.largeImage}
          />
          <Text style={styles.itemTitle}>Flower Sunglasses</Text>

          <Button
            style={{ width: 40 }}
            title="View Details"
            onPress={() => props.navigation.navigate("Flower Sunglasses")}
          />
        </View>

        <View style={styles.itemGroup}>
          <Image
            source={require("./images/Humble_Sweater_(Purple)_NH_Icon.png")}
            style={styles.largeImage}
          />
          <Text style={styles.itemTitle}>Humble Sweater</Text>

          <Button
            style={{ width: 40 }}
            title="View Details"
            onPress={() => props.navigation.navigate("Humble Sweater")}
          />
        </View>

        <View style={styles.itemGroup}>
          <Image
            source={require("./images/Belted_Wraparound_Skirt_(Yellow)_NH_Icon.png")}
            style={styles.largeImage}
          />
          <Text style={styles.itemTitle}>Belted Wrap-Around Skirt</Text>

          <Button
            style={{ width: 40 }}
            title="View Details"
            onPress={() =>
              props.navigation.navigate("Belted Wrap-around Skirt")
            }
          />
        </View>

        <View style={styles.itemGroup}>
          <Image
            source={require("./images/Doctor's_Mask_NH_Icon.png")}
            style={styles.largeImage}
          />
          <Text style={styles.itemTitle}>Doctor's Mask</Text>

          <Button
            style={{ width: 40 }}
            title="View Details"
            onPress={() => props.navigation.navigate("Doctor's Mask")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  largeImage: {
    width: 200,
    height: 200,
  },
  flexWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  itemGroup: {
    marginTop: 20,
    marginBottom: 20,
  },
  itemTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 50,
  },
});

export default Shop;
