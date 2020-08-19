import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import EndeavorsScreen from "./screens/endeavors-screen";
import { StackNavigationConfig } from "react-navigation-stack/lib/typescript/src/vendor/types";

export const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: EndeavorsScreen,
    },
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      headerShown: false,
      header: () => null,
    },
  }
);
