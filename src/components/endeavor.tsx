import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

function Endeavor(props: any) {
  const { endeavor, index } = props;

  return (
    <View  style={styles.endeavor}>
      <Text style={styles.defaultText}>{endeavor.title}</Text>
    </View>
  );
}

export default Endeavor;
