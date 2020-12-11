import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

class HumbleSweater_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "PURPLE",
      amount: 0,
      added_to_cart: 0,
      name: "Humble Sweater",
    };
  }

  render() {
    let image = "";
    let message = "";

    if (this.state.color === "VIOLET BLUE") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Humble_Sweater_(VioletBlue)_NH_Icon.png")}
        />
      );
    } else if (this.state.color === "BEIGE") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Humble_Sweater_(Brown)_NH_Icon.png")}
        />
      );
    } else if (this.state.color === "GREEN") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Humble_Sweater_(Green)_NH_Icon.png")}
        />
      );
    } else if (this.state.color === "PURPLE") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Humble_Sweater_(Purple)_NH_Icon.png")}
        />
      );
    }

    if (this.state.amount < 0) {
      this.state.amount = 0;
    }

    if (this.state.amount === 0) {
      this.state.added_to_cart = 0;
    }

    if (this.state.added_to_cart === 1) {
      message = (
        <Text style={styles.message}>
          You have {this.state.amount} {this.state.color} {this.state.name} in
          your cart!
        </Text>
      );
    }

    return (
      <View style={{ padding: 50, paddingTop: 10 }}>
        <Text style={{ fontSize: 40 }}>Humble Sweater</Text>
        {image}

        <View>
          <Text style={styles.bold}>Available in 4 colors:</Text>

          <View style={styles.flexWrap}>
            <TouchableOpacity
              onPress={() => this.setState({ color: "PURPLE" })}
            >
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Humble_Sweater_(Purple)_NH_Icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ color: "BEIGE" })}>
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Humble_Sweater_(Brown)_NH_Icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ color: "GREEN" })}>
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Humble_Sweater_(Green)_NH_Icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ color: "VIOLET BLUE" })}
            >
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Humble_Sweater_(VioletBlue)_NH_Icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Text style={{ fontSize: 30, marginTop: 20 }}>1150 Bells</Text>
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.bold}> Product Details</Text>
          <Text>
            Is there a more comfy sweater?? No! The Humble Sweater is your
            perfect everyday look, with a black longsleeve and woven vest
            available in enough colors to rotate year round! Villagers are sure
            to compliment this cozy sweater whenever you wear it.
          </Text>
          <Text style={{ marginTop: 10 }}>
            Available Colors: Purple, Beige, Green, Violet Blue.
          </Text>
        </View>

        <View>
          <View style={styles.flexWrapJustify}>
            <Text style={{ marginRight: 20, marginTop: 5 }}>
              Quantity: {this.state.amount}{" "}
            </Text>
            <Button
              title="Add"
              onPress={() => this.setState({ amount: this.state.amount + 1 })}
            />
            <Button
              title="Remove"
              onPress={() => this.setState({ amount: this.state.amount - 1 })}
            />
            <Button
              title="Remove All Items"
              onPress={() => this.setState({ amount: (this.state.amount = 0) })}
            />
          </View>
          <Button
            title="Add to Cart"
            onPress={() =>
              this.setState({ added_to_cart: (this.state.added_to_cart = 1) })
            }
          />
          {message}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
  flexWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexRowReverse: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  largeImage: {
    width: 250,
    height: 250,
  },
  colorThumbnail: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  textGroup: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  flexWrapJustify: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    backgroundColor: "#dddddd",
    color: "black",
    padding: 20,
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
  },
});

export default HumbleSweater_Details;
