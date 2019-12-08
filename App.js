import React, { useState } from "react";
import { useScreens } from "react-native-screens";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import AppStack from "./Navigation/Navigation";
useScreens();
// Load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    robotoBold: require("./assets/Fonts/Roboto-Bold.ttf"),
    robotoRegular: require("./assets/Fonts/Roboto-Regular.ttf")
  });
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  // Check if fonts are loaded before rendering App
  if (!loaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setLoaded(true);
      }}
      onError={err => {
        console.log(err);
      }}
    />;
  }

  return <AppStack />;
};

export default App;
