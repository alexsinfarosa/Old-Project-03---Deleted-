import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, View } from "react-native";
import { Icon, Button, Text } from "native-base";

import ThreeDaysGraph from "../../components/ThreeDaysGraph";

class Main extends React.Component {
  render() {
    const { field } = this.props;
    const { setDefaultValueMap } = this.props.app.fieldsStore;

    return (
      <View style={styles.container}>
        <View style={styles.colFlexEnd}>
          <View style={styles.colToRow}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Icon
                onPress={this.props.scrollBack}
                name="cloudy"
                style={{ fontSize: 23 }}
              />
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Icon name="stats" style={{ color: "#355691" }} />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Icon
                onPress={this.props.scrollForward}
                name="water"
                style={{ fontSize: 23 }}
              />
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
          {field ? (
            <View style={styles.field}>
              <Text style={{ fontSize: 20 }}>{field.name}</Text>
              <Text style={{ color: "teal", fontSize: 16 }}>
                {field.irrigationDate}
              </Text>
            </View>
          ) : (
            <View>
              <Button
                bordered
                style={{ borderColor: "#355691" }}
                onPress={() => {
                  this.props.scrollTo(-2);
                  setDefaultValueMap("ciccio");
                }}
              >
                <Text style={{ color: "#355691" }}>Add Field</Text>
              </Button>
            </View>
          )}

          <ThreeDaysGraph />
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
    alignItems: "center",
    marginBottom: 16
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

export default inject("app")(observer(Main));
