import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify, { Auth, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";

import config from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { createEndeavor } from "./src/graphql/mutations";
import { onCreateEndeavor } from "./src/graphql/subscriptions";
import { listActivitys, listEndeavors } from "./src/graphql/queries";
import styles  from "./src/styles";

const CLIENTID = uuid();
import uuid from "uuid/v4";

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
        endeavors: action.endeavors,
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

async function CreateEndeavor(state, dispatch) {
  const { title, description } = state;
  const endeavor = {
    title: "Endeavor 86",
    description: "",
    momentum: 1,
    clientId: CLIENTID,
  };

  try {
    console.log(state);

    const updatedEndeavorsArray = [...state.endeavors, endeavor];
    dispatch({
      type: "set",
      endeavors: updatedEndeavorsArray,
    });
  } catch (err) {
    console.log(err);
  }

  try {
    await API.graphql(
      graphqlOperation(createEndeavor, {
        input: endeavor,
      })
    );
  } catch (err) {
    console.log("error creating endeavors...", err);
  }
}

function Endeavor(props) {
  const { endeavor, index } = props;

  return (
    <View key={endeavor.id ? endeavor.id : index} style={styles.endeavor}>
      <Text style={styles.defaultText}>{endeavor.title}</Text>
    </View>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { endeavors } = state;

  useEffect(() => {
    const subscriber = API.graphql(
      graphqlOperation(onCreateEndeavor)
    ).subscribe({
      next: (eventData) => {
        const endeavor = eventData.value.data.onCreateEndeavor;
        if (CLIENTID === endeavor.cliendId) return;
        dispatch({ type: "add", endeavor });
      },
    });
    return () => subscriber.unsubscribe();
  }, []);

  useEffect(() => {
    getEndeavors(dispatch);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.h1}>Imba</Text>
          {endeavors.map((endvr, index) => (
            <Endeavor endeavor={endvr} index={index} />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => CreateEndeavor(state, dispatch)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Endeavor</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default withAuthenticator(App);
