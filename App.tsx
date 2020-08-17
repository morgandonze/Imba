import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";

import config from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import {} from "./src/graphql/mutations";
import { listActivitys, listEndeavors } from "./src/graphql/queries";

Amplify.configure(config);

function App() {
  const [endeavors, setEndeavors] = useState([]);

  useEffect(() => {
    fetchEndeavors();
  }, []);

  async function fetchEndeavors() {
    try {
      const endeavorData = await API.graphql(graphqlOperation(listEndeavors));
      const endeavors = endeavorData.data.listEndeavors.items;
      setEndeavors(endeavors);
    } catch (err) {
      console.log("error fetching endeavors");
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.h1}>Imba !!!</Text>
        {endeavors.map((endvr, index) => (
          <View key={endvr.id ? endvr.id : index}>
            <Text style={styles.defaultText}>•{endvr.title}</Text>
          </View>
        ))}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#333", flex: 1 },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  h1: {
    color: "#ffab00",
    fontSize: 40,
  },
  defaultText: {
    color: "#ccc",
  },
});

export default withAuthenticator(App);
