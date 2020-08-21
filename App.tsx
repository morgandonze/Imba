import React, { useEffect, useState } from "react";
import configureAWS from "./src/configure-aws";
import "react-native-gesture-handler";
import EndeavorsScreen from "./app/screens/endeavors-screen";
import StatefulNavigator from "./app/stateful-navigator";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import EndeavorScreen from "./app/screens/endeavor-screen";
import { RootStoreModel, RootStore } from "./app/mobx/root-store";
import { Provider } from "mobx-react";

configureAWS();

const RootNavigator = createStackNavigator(
  {
    Endeavors: {
      screen: EndeavorsScreen,
    },
    Endeavor: {
      screen: EndeavorScreen,
    },
  },
  { headerMode: "none", initialRouteName: "Endeavor" }
);

class Environment extends React.Component<{}, {}> {
  constructor(props?: any) {
    super(props);
  }
}

function setupRootStore() {
  const env = new Environment();
  const rootStore = RootStoreModel.create({}, env);
  // do stuff with rootStore
  return rootStore;
}

interface AppState {
  rootStore?: RootStore;
}

const App = () => {
  // const navigationOptions = () => {};
  const [state, setState] = useState<AppState>({
    rootStore: undefined,
  });

  useEffect(() => {
    const rootStore = setupRootStore();
    setState({
      ...state,
      rootStore: rootStore,
    });
  }, []);

  const AppContainer = createAppContainer(RootNavigator);

  if (!state.rootStore) {
    return null;
  }

  return (
    <Provider rootStore={state.rootStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
