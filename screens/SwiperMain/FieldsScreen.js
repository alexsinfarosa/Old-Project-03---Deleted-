import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

import Fields from "../../components/Fields";

class FieldsScreen extends React.Component {
  render() {
    const { setDefaultValueMap } = this.props.app.fieldsStore;

    return (
      <View style={styles.container}>
        <View style={styles.colFlexEnd}>
          <View style={styles.colToRow}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Icon
                onPress={this.props.scrollBack}
                name="stats"
                style={{ fontSize: 23 }}
              />
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Icon name="water" style={{ color: "#355691" }} />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 8,
            justifyContent: "center"
          }}
        >
          <Fields scrollBack={this.props.scrollBack} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  colFlexEnd: {
    flex: 1.1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  colToRow: {
    flexDirection: "row"
  },
  colCentered: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  field: {
    height: 100,
    padding: 8
  }
});

export default inject("app")(observer(FieldsScreen));
