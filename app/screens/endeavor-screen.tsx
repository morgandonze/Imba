import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../src/styles";

function EndeavorScreen(props: any) {
  const TITLE = "Endeavor";
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.h1}>{TITLE}</Text>
      </View>
    </ScrollView>
  );
}

export default EndeavorScreen;
