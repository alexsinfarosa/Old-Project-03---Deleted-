import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

class ForecastScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colFlexEnd}>
          <View style={styles.colToRow}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text />
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Icon name="cloudy" style={{ color: "#355691" }} />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Icon
                onPress={this.props.scrollForward}
                name="stats"
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
          <View>
            <Text>Forecast</Text>
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

export default inject("app")(observer(ForecastScreen));
