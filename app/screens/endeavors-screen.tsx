import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "../../src/styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Endeavor from "../../src/components/endeavor";
import { Input } from "react-native-elements";
import {
  EndeavorUpdater,
  EndeavorReducer,
} from "../../src/_graphql/endeavor-reducer";
import CreateEndeavor from "../../src/_graphql/create-endeavor";
import { StatusBar } from "expo-status-bar";
import { useReducer, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateEndeavor } from "../../src/graphql/subscriptions";
import getEndeavors from "../../src/_graphql/get-endeavors";
import uuid from "uuid-v4";
const ImbaTitle = "imba";
const CLIENTID = uuid();
const initialState = {
  error: null,
  endeavors: [],
  title: "",
  description: "",
  momentum: 0,
  clientId: CLIENTID,
};

function EndeavorsScreen(props: any) {
  const { endeavors } = props;
  const [state, dispatch] = useReducer(EndeavorReducer, initialState);

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
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.h1}>{ImbaTitle}</Text>

        {endeavors &&
          endeavors.map((endvr: any, index: any) => (
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
          label="Title"
          style={{ ...styles.input }}
          onChange={(e: any) => {
            EndeavorUpdater(e.target.value, "title", dispatch);
          }}
          value={state.title}
        />
        <TouchableOpacity
          onPress={() => CreateEndeavor(state, dispatch)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Endeavor</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default EndeavorsScreen;
