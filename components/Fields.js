import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, View, Text } from "native-base";
import { Row, Col, Grid } from "react-native-easy-grid";

import Swipeout from "react-native-swipeout";

const styles = StyleSheet.create({
  field: {
    height: 170,
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
    const {
      fields,
      removeField,
      selectField,
      setMainScreenIdx
    } = this.props.app.fieldsStore;

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

    const fieldList = fields.sort((a, b) => a.id < b.id).map((field, index) => (
      <Swipeout
        right={swipeoutBtns}
        key={field.id}
        autoClose={true}
        rowID={index}
        onOpen={(sectionID, rowID) => {
          selectField(field.id);
          this.setState({ rowID });
        }}
      >
        <View style={styles.field}>
          <Text>Location: {field.name}</Text>
          <Text>Lat: {field.latLon.lat}</Text>
          <Text>Lon: {field.latLon.lng}</Text>
          <Text>Id: {field.id}</Text>
          <Text>Crop: {field.crop}</Text>
          <Text>Date: {field.irrigationDate}</Text>
          <Text>SWC: {field.soilWaterCapacity}</Text>
        </View>
      </Swipeout>
    ));

    return <Content>{fieldList}</Content>;
  }
}

export default inject("app")(observer(Fields));
