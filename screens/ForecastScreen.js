import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class ForecastScreen extends React.Component {
  static navigationOptions = {
    title: "Forecast"
  };
  render() {
    return (
      <View style={styles.forecast}>
        <Text style={styles.text}>Forecast</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forecast: {
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
