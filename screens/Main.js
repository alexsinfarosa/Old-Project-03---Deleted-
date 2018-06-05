import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon } from "native-base";

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colFlexEnd}>
          <View style={styles.colToRow}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Icon onPress={this.props.scrollBack} name="cloudy" />
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Text
                style={{
                  color: this.props.idx === 1 ? "#355691" : null,
                  fontSize: 16
                }}
              >
                Main
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Icon onPress={this.props.scrollForward} name="water" />
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
            <Text>Main</Text>
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
    flex: 1,
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

export default inject("app")(observer(Main));