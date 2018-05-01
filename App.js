import React from "react";
import { StackNavigator } from "react-navigation";

// Screens components
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    About: {
      screen: AboutScreen
    }
  },
  {
    initialRouteName: "Home",
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
    return <RootStack />;
  }
}
