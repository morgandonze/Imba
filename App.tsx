import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer } from "react";
import { Input } from "react-native-elements";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { API, graphqlOperation } from "aws-amplify";
import CreateEndeavor from "./src/_graphql/create-endeavor";
import { onCreateEndeavor } from "./src/graphql/subscriptions";
import styles from "./src/styles";
import {
  EndeavorReducer,
  EndeavorUpdater,
} from "./src/_graphql/endeavor-reducer";
import getEndeavors from "./src/_graphql/get-endeavors";
import Endeavor from "./src/components/endeavor";
import configureAWS from "./src/configure-aws";
import uuid from "uuid-v4";

const ImbaTitle = "Imba";
const CLIENTID = uuid();
configureAWS();

const initialState = {
  error: null,
  endeavors: [],
  title: "",
  description: "",
  momentum: 0,
  clientId: CLIENTID,
};

function App() {
  const [state, dispatch] = useReducer(EndeavorReducer, initialState);
  const { endeavors } = state;

  useEffect(() => {
    const apiCreateEndeavor: any = API.graphql(
      graphqlOperation(onCreateEndeavor)
    );

    const subscriber = apiCreateEndeavor.subscribe({
      next: (eventData: any) => {
        console.log(eventData);
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
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.h1}>{ImbaTitle}</Text>

          {endeavors.map((endvr: any, index: any) => (
            <Endeavor
              key={endvr.id ? endvr.id : index}
              endeavor={endvr}
              index={index}
            />
          ))}
        </View>

        <View>
          <Input
            placeholder="title"
            style={{ ...styles.input }}
            onChange={(e: any) => {
              EndeavorUpdater(e.target.value, "title", dispatch);
            }}
            value={state.title}
          />
          <TouchableOpacity
            onPress={() => {
              console.log(state.endeavors);
              CreateEndeavor(state, dispatch);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add Endeavor</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default withAuthenticator(App);
