import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

class BeltedSkirt_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "YELLOW",
      amount: 0,
      added_to_cart: 0,
      name: "Belted Wrap-Around Skirt",
    };
  }

  render() {
    let image = "";
    let message = "";

    if (this.state.color === "BLUE") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Belted_Wraparound_Skirt_(Blue)_NH_Icon.png")}
        />
      );
    } else if (this.state.color === "RED") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Belted_Wraparound_Skirt_(Red)_NH_Icon.png")}
        />
      );
    } else if (this.state.color === "GREEN") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Belted_Wraparound_Skirt_(Green)_NH_Icon.png")}
        />
      );
    } else if (this.state.color === "YELLOW") {
      image = (
        <Image
          style={styles.largeImage}
          source={require("./images/Belted_Wraparound_Skirt_(Yellow)_NH_Icon.png")}
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
        <Text style={{ fontSize: 40 }}>Belted Wrap-Around Skirt</Text>
        {image}

        <View>
          <Text style={styles.bold}>Available in 4 colors:</Text>

          <View style={styles.flexWrap}>
            <TouchableOpacity
              onPress={() => this.setState({ color: "YELLOW" })}
            >
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Belted_Wraparound_Skirt_(Yellow)_NH_Icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ color: "RED" })}>
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Belted_Wraparound_Skirt_(Red)_NH_Icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ color: "BLUE" })}>
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Belted_Wraparound_Skirt_(Blue)_NH_Icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ color: "GREEN" })}>
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Belted_Wraparound_Skirt_(Green)_NH_Icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Text style={{ fontSize: 30, marginTop: 20 }}>1040 Bells</Text>
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.bold}> Product Details</Text>
          <Text>
            This elegant and simple skirt can be paired with just about anything
            to achieve the best preppy look! It wraps perfectly around your
            waist and has a comfy belt. Get this wardrobe staple in Mustard
            Yellow for Fall, Red for Winter, Blue for Spring, or Green for
            Summer!
          </Text>
          <Text style={{ marginTop: 10 }}>
            Available Colors: Yellow, Red, Blue, and Green.
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

export default BeltedSkirt_Details;
