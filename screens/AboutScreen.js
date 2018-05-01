import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: "About"
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
          <Text style={styles.text}>About...</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
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
    backgroundColor: "tomato",
    borderWidth: 2,
    borderColor: "firebrick",
    borderRadius: 20
  },
  text: {
    textAlign: "center",
    lineHeight: 150
  }
});
