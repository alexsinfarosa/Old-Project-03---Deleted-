import React from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import Fields from "../components/Fields";
import { Container } from "native-base";

export default class FieldsScreen extends React.Component {
  static navigationOptions = {
    title: "Fields"
  };
  render() {
    return (
      <Container style={styles.fields}>
        <ScrollView>
          <Fields navigation={this.props.navigation} />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fields: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#9DD6EB"
    backgroundColor: "#FFF"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
