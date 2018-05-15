import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, View, Text } from "native-base";
import { Row, Col, Grid } from "react-native-easy-grid";

import Swipeout from "react-native-swipeout";

const styles = StyleSheet.create({
  field: {
    height: 120,
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderBottomColor: "#F0F0F0",
    padding: 15
  }
});

class Fields extends Component {
  state = {
    rowID: null
  };

  render() {
    const { fields, removeField } = this.props.app.fieldsStore;
    console.log(fields.slice());

    // Buttons
    const swipeoutBtns = [
      {
        text: "Delete",
        type: "delete",
        backgroundColor: "tomato",
        color: "#fff",
        onPress: () => removeField(this.state.rowID)
      }
    ];

    const fieldList = fields.map((field, index) => (
      <Swipeout
        right={swipeoutBtns}
        key={field.id}
        autoClose={true}
        rowID={index}
        onOpen={(sectionID, rowID) => {
          this.setState({ rowID });
        }}
      >
        <View style={styles.field}>
          <Text>{field.id}</Text>
        </View>
      </Swipeout>
    ));

    return <Content>{fieldList}</Content>;
  }
}

export default inject("app")(observer(Fields));
