import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Imba !!!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "flex-start",
    // justifyContent: "center",
  },
  h1: {
    color: "#ccc",
    fontSize: 40,
  },
});

export default withAuthenticator(App);
