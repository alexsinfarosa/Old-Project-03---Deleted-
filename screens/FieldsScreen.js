import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

class FieldsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colFlexEnd}>
          <View style={styles.colToRow}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text />
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>Fields</Text>
              <Icon
                name="water"
                // active={this.props.idx === 2 ? true : false}
                style={{ color: "#355691" }}
              />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 8,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View>
            <Text>All Fields</Text>
          </View>
        </View>
        {/**<View style={{ flex: 1 }}>
          <View style={styles.colCentered}>
            <Text>Footer</Text>
          </View>
        </View>**/}
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
  }
});

export default inject("app")(observer(FieldsScreen));
