import React from "react";
import configureAWS from "./src/configure-aws";
import "react-native-gesture-handler";
import EndeavorsScreen from "./app/screens/endeavors-screen";
import StatefulNavigator from "./app/stateful-navigator";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

configureAWS();

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: EndeavorsScreen,
    },
  },
  { headerMode: "none" }
);

class App extends React.Component {
  static navigationOptions = ({ navigation }) => {};
  render() {
    const AppContainer = createAppContainer(RootNavigator);
    return <AppContainer ></AppContainer>;
  }
}

export default App;
