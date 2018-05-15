import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, View, Text } from "native-base";
import { Row, Col, Grid } from "react-native-easy-grid";

import Swipeout from "react-native-swipeout";

const styles = StyleSheet.create({
  field: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    marginTop: 40,
    width: 200,
    height: 100
  }
});

// Buttons
const swipeoutBtns = [
  {
    text: "Delete",
    backgroundColor: "tomato",
    color: "#fff"
  }
];

class Fields extends Component {
  render() {
    const { fields } = this.props.app.fieldsStore;
    console.log(fields.slice());

    const fieldList = fields.map(field => (
      <Swipeout right={swipeoutBtns} key={field.id} autoClose={true}>
        <View
          style={{
            height: 120,
            borderBottomWidth: 1,
            backgroundColor: "#fff",
            borderBottomColor: "#F0F0F0",
            padding: 15
          }}
        >
          <Text>{field.id}</Text>
        </View>
      </Swipeout>
    ));

    return <Content>{fieldList}</Content>;
  }
}

export default inject("app")(observer(Fields));
