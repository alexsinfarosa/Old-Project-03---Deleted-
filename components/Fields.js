import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { Container, Content, View, Text } from "native-base";
import { Row, Col, Grid } from "react-native-easy-grid";

class Fields extends Component {
  render() {
    const { fields } = this.props.app.fieldsStore;

    const fieldList = fields.forEach(field => (
      <Row
        size={25}
        key={field.irrigationDate}
        style={{ backgroundColor: "orange" }}
      >
        <View style={{ borderWidth: 1, padding: 15, height: "20%" }}>
          <Text>{field.irrigationDate}</Text>
        </View>
      </Row>
    ));

    return <Grid>{fieldList}</Grid>;
  }
}

export default inject("app")(observer(Fields));
