import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff"
        }}
      >
        <View style={styles.box}>
          <Text style={styles.text}>Home...</Text>
          <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate("About")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: "skyblue",
    borderWidth: 2,
    borderColor: "steelblue",
    borderRadius: 20
  },
  text: {
    textAlign: "center",
    lineHeight: 150
  }
});
