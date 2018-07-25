import React from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

import Swiper from "react-native-swiper";

// Screens components
import ForecastScreen from "./screens/ForecastScreen";
import FieldsScreen from "./screens/FieldsScreen";
import Main from "./screens/Main";

import { View, Text } from "react-native";
import CreateField1 from "./screens/CreateField1";
import CreateField2 from "./screens/CreateField2";

//  mobx
const app = new RootStore();

const RootStack = createStackNavigator(
  {
    Step1: {
      screen: CreateField1
    },
    Step2: {
      screen: CreateField2
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
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    idx: 1
  };

  scrollForward = () => this.myRef.current.scrollBy(1);
  scrollBack = () => this.myRef.current.scrollBy(-1);

  render() {
    console.log(app.fieldsStore.isSwiper);
    return (
      <Provider app={app}>
        {app.fieldsStore.isSwiper ? (
          <Swiper
            showsButtons={false}
            loop={false}
            index={1}
            ref={this.myRef}
            onIndexChanged={idx => this.setState({ idx })}
            activeDotColor="#355691"
          >
            <ForecastScreen idx={this.state.idx} />
            <Main
              idx={this.state.idx}
              scrollBack={this.scrollBack}
              scrollForward={this.scrollForward}
            />
            <FieldsScreen idx={this.state.idx} />
          </Swiper>
        ) : (
          <RootStack />
        )}
      </Provider>
    );
  }
}
