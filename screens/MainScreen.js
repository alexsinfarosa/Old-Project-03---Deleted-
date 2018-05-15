import React from "react";
import { inject, observer } from "mobx-react";

import { StyleSheet, Text, View, Button } from "react-native";
import Swiper from "react-native-swiper";

// components
import FieldsScreen from "./FieldsScreen";
import ForecastScreen from "./ForecastScreen";

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title:
      typeof navigation.state.params === "undefined" ||
      typeof navigation.state.params.title === "undefined"
        ? "Main"
        : navigation.state.params.title,
    headerLeft: null
  });

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        index={2}
        onIndexChanged={i => {
          if (i === 0) this.props.navigation.setParams({ title: "Forecast" });
          if (i === 1) this.props.navigation.setParams({ title: "Main" });
          if (i === 2) this.props.navigation.setParams({ title: "Fields" });
        }}
      >
        <ForecastScreen />

        <View style={styles.main}>
          <Text style={styles.text}>Main</Text>
        </View>

        <FieldsScreen navigation={this.props.navigation} />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "pink" },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default inject("app")(observer(MainScreen));
