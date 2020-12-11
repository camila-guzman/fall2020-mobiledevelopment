import React from "react";

import { StyleSheet, View, Text } from "react-native";

function About() {
  return (
    <View style={{ padding: 50, paddingTop: 10 }}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.text}>
        The Able Sisters is a clothing shop and one of the main stores on this
        beautiful island. It is owned and run by us, Sable and Mabel. The
        original store was owned and run by the our parents until they passed.
        We love interacting with customers, although Sable prefers if you don't
        bother her while she works on patterns. This year, our sister Label
        gives our store access to exclusive pieces from her fashion brand named
        Labelle.
      </Text>

      <Text style={styles.text}>
        Clothing items are hand crafted by Sabel! The Able Sisters offers
        shirts, bottoms, dresses, shoes, accessories, and more!
      </Text>

      <Text style={styles.text}>
        Stop by our local store today and see everything we have to offer!
      </Text>
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
    marginTop: 10,
  },
});

export default About;
