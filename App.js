import React from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Subtitle,
  Footer,
  Button,
  Text,
  H1
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

// Screens components
import CreateField1 from "./screens/CreateField1";
import CreateField2 from "./screens/CreateField2";
import MainScreen from "./screens/MainScreen";

//  mobx
const app = new RootStore();

const RootStack = createStackNavigator(
  {
    Step1: {
      screen: CreateField1
    },
    Step2: {
      screen: CreateField2
    },
    Main: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: "Step1",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomColor: "#fff"
      }
      // headerTintColor: "red",
      // headerTitleStyle: {
      //   fontWeight: "bold"
      // }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider app={app}>
        <RootStack />
      </Provider>
    );
  }
}
