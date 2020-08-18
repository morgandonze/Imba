import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useReducer } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify, { Auth, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";

import config from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import {} from "./src/graphql/mutations";
import { onCreateEndeavor } from "./src/graphql/subscriptions";
import { listActivitys, listEndeavors } from "./src/graphql/queries";

// CONFIG
Amplify.configure(config);
// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "us-east-1",
    aws_pubsub_endpoint:
      "wss://a3gy3b4v65p14p-ats.iot.us-east-1.amazonaws.com/mqtt",
  })
);
// Auth.currentCredentials().then((info) => {
//   // const cognitoIdentityId = info.data.IdentityId;
//   // console.log(info);
// });

const initialState = {
  error: null,
  endeavors: [],
  title: "",
  description: "",
  momentum: 0,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "set":
      return {
        ...state,
      };
    case "add":
      return {
        ...state,
        endeavors: [...state.endeavors, action.endeavor],
      };
    case "error":
      return {
        ...state,
        error: true,
      };
    case "updateInput":
      return {
        ...state,
        [action.inputValue]: action.value,
      };
    default:
      new Error();
  }
}

// https://youtu.be/VQ-umMTEQq4?t=1580
// https://github.com/dabit3/aws-appsync-react-workshop/blob/with-testing/AppWithHooks.js
async function getEndeavors(dispatch) {
  try {
    const endeavorData = await API.graphql(graphqlOperation(listEndeavors));
    dispatch({
      type: "set",
      endeavors: endeavorData.data.listEndeavors.items,
    });
  } catch (err) {
    dispatch({ type: "error" });
    console.log("error fetching endeavors...", err);
  }
}

const updater = (value, inputValue, dispatch) => {
  dispatch({
    type: "updateInput",
    value,
    inputValue,
  });
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { endeavors } = state;

  useEffect(() => {
    const subscriber = API.graphql(
      graphqlOperation(onCreateEndeavor)
    ).subscribe({
      next: (eventData) => {
        const endeavor = eventData.value.data.onCreateEndeavor;
        // if(endeavor.id === anyExistingEventId) return
        dispatch({ type: "add", endeavor });
        // setEndeavors([...endeavors, endeavor]);
      },
    });
    return () => subscriber.unsubscribe();
  }, []);

  useEffect(() => {
    getEndeavors(dispatch);
  }, []);
  console.log("state: ", state);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.h1}>Imba !!!</Text>
        {endeavors.map((endvr, index) => (
          <View key={endvr.id ? endvr.id : index}>
            <Text style={styles.defaultText}>{endvr.title}</Text>
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
