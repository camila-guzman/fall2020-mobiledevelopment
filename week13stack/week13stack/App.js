import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home";
import Running from "./components/Running";
import Stairs from "./components/Stairs";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} title="Home" />
        <Stack.Screen name="Running" component={Running} title="Running" />
        <Stack.Screen name="Stairs" component={Stairs} title="Stairs" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
