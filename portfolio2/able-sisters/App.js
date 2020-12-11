import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Shop from "./screens/Shop";
import About from "./screens/About";
import FlowerSunglasses_Details from "./screens/FlowerSunglasses_Details";
import HumbleSweater_Details from "./screens/HumbleSweater_Details";
import BeltedSkirt_Details from "./screens/BeltedSkirt_Details";
import DoctorsMask_Details from "./screens/DoctorsMask_Details";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Able Sisters" component={Home} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Flower Sunglasses"
          component={FlowerSunglasses_Details}
        />
        <Stack.Screen name="Humble Sweater" component={HumbleSweater_Details} />
        <Stack.Screen
          name="Belted Wrap-around Skirt"
          component={BeltedSkirt_Details}
        />
        <Stack.Screen name="Doctor's Mask" component={DoctorsMask_Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
