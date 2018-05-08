import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class FieldsScreen extends React.Component {
  static navigationOptions = {
    title: "Fields"
  };
  render() {
    return (
      <View style={styles.fields}>
        <Text style={styles.text}>Fields</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fields: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
