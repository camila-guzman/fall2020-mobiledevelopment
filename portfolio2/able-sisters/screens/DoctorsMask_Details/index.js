import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

class DoctorsMask_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "WHITE",
      amount: 0,
      added_to_cart: 0,
      name: "Humble Sweater",
    };
  }

  render() {
    let message = "";

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
        <Text style={{ fontSize: 40 }}>Doctor's Mask</Text>
        <Image
          style={styles.largeImage}
          source={require("./images/Doctor's_Mask_NH_Icon.png")}
        />

        <View>
          <Text style={styles.bold}>Available in 1 color:</Text>

          <View style={styles.flexWrap}>
            <TouchableOpacity onPress={() => this.setState({ color: "WHITE" })}>
              <Image
                style={styles.colorThumbnail}
                source={require("./images/Doctor's_Mask_NH_Icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Text style={{ fontSize: 30, marginTop: 20 }}>140 Bells</Text>
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.bold}> Product Details</Text>
          <Text>
            Wearing a mask can protect you and the people around you! These
            masks are durable and can be machine or hand washed. Patterned masks
            coming soon!
          </Text>
          <Text style={{ marginTop: 10 }}>Available Colors: White.</Text>
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
    width: 80,
    height: 80,
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

export default DoctorsMask_Details;
