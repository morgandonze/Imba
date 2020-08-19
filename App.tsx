import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { API, graphqlOperation } from "aws-amplify";
import { createEndeavor } from "./src/graphql/mutations";
import { onCreateEndeavor } from "./src/graphql/subscriptions";
import styles from "./src/styles";
import EndeavorReducer from "./src/_graphql/endeavor-reducer";
import getEndeavors from "./src/_graphql/get-endeavors";
import Endeavor from "./src/components/endeavor";
import uuid from "uuid/v4";
import configureAWS from "./src/configure-aws";

const CLIENTID = uuid();

// CONFIG
configureAWS();

const initialState = {
  error: null,
  endeavors: [],
  title: "",
  description: "",
  momentum: 0,
};

async function CreateEndeavor(state: any, dispatch: any) {
  const endeavor = {
    title: "Endeavor 86",
    description: "",
    momentum: 1,
    clientId: CLIENTID,
  };

  try {
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

function App() {
  const [state, dispatch] = useReducer(EndeavorReducer, initialState);
  const { endeavors } = state;

  useEffect(() => {
    const api: any = API.graphql(graphqlOperation(onCreateEndeavor));

    const subscriber = api.subscribe({
      next: (eventData: any) => {
        const endeavor = eventData.value.data.onCreateEndeavor;
        if (CLIENTID === endeavor.cliendId) return;
        dispatch({ type: "add", endeavor });
      },
    });
    return () => subscriber.unsubscribe();
  }, []);

  useEffect(() => {
    getEndeavors(dispatch as () => null);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.h1}>Imba</Text>
          {endeavors.map((endvr: any, index: any) => (
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
