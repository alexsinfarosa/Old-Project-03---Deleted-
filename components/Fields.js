import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { StyleSheet } from "react-native";
import { Container, Content, View, Text } from "native-base";
import { Row, Col, Grid } from "react-native-easy-grid";

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

class Fields extends Component {
  render() {
    const { fields } = this.props.app.fieldsStore;
    console.log(fields.slice());

    const fieldList = fields.map(field => (
      <Row key={field.id} style={styles.field}>
        <View style={{ padding: 15 }}>
          <Text>{field.irrigationDate}</Text>
          <Text>{field.id}</Text>
          <Text>{field.latLon}</Text>
        </View>
      </Row>
    ));

    return (
      <Grid>
        {fieldList}
        <Row style={styles.field}>
          <View
            style={{
              padding: 15,
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 30 }}>+</Text>
          </View>
        </Row>
      </Grid>
    );
  }
}

export default inject("app")(observer(Fields));
