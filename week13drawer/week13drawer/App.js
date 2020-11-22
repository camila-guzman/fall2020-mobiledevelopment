import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./components/Home";
import Running from "./components/Running";
import Stairs from "./components/Stairs";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} title="Home" />
        <Drawer.Screen name="Running" component={Running} title="Running" />
        <Drawer.Screen name="Stairs" component={Stairs} title="Stairs" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
