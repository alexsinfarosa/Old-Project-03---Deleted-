import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { Container, Content, View, Text } from "native-base";
import { Row, Col, Grid } from "react-native-easy-grid";

import Swipeout from "react-native-swipeout";

const styles = StyleSheet.create({
  field: {
    height: 100,
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderBottomColor: "#F0F0F0",
    padding: 15
  }
});

class Fields extends Component {
  state = {
    fieldID: null
  };

  render() {
    const { fields, removeField, selectField } = this.props.app.fieldsStore;

    // Buttons
    const swipeoutBtns = [
      {
        text: "Delete",
        type: "delete",
        backgroundColor: "tomato",
        color: "#fff",
        onPress: () => removeField(this.state.fieldID)
      }
    ];

    const fieldList = fields.sort((a, b) => a.id < b.id).map((field, index) => (
      <Swipeout
        right={swipeoutBtns}
        key={field.id}
        autoClose={true}
        rowID={index}
        onOpen={() => {
          selectField(field.id);
          this.setState({ fieldID: field.id });
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.scrollBack();
            console.log(field.id);
            selectField(field.id);
          }}
        >
          <View style={styles.field}>
            <Text style={{ fontSize: 20 }}>{field.name}</Text>
            <Text style={{ color: "teal", fontSize: 16 }}>
              {field.irrigationDate}
            </Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    ));

    return <Content>{fieldList}</Content>;
  }
}

export default inject("app")(observer(Fields));
