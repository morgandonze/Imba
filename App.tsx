import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer } from "react";
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
import EndeavorReducer from "./src/_graphql/endeavor-reducer";
import getEndeavors from "./src/_graphql/get-endeavors";
import Endeavor from "./src/components/endeavor";
import configureAWS from "./src/configure-aws";
import uuid from "uuid-v4";

const CLIENTID = uuid();
configureAWS();
const ImbaTitle = "Imba";

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
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.h1}>{ImbaTitle}</Text>

          {endeavors.map((endvr: any, index: any) => (
            <Endeavor endeavor={endvr} index={index} />
          ))}
        </View>

        <View>
          <TouchableOpacity
            onPress={() => CreateEndeavor(state, dispatch)}
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
