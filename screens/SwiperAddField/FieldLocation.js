import React from "react";
import { inject, observer } from "mobx-react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center"
    // backgroundColor: "pink"
  },
  top: {
    flex: 0.7,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  main: {
    flex: 3,
    padding: 16
    // backgroundColor: "tomato"
  },
  bottom: {
    flex: 0.3,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1faadb"
  },
  h1: {
    fontSize: 20
  }
});

class FieldLocation extends React.Component {
  render() {
    const {
      latLon,
      setLatLon,
      setName,
      defaultValueMap
    } = this.props.app.fieldsStore;
    const { scrollForward } = this.props;

    return (
      <View style={styles.root}>
        <View style={styles.top}>
          <Text style={styles.h1}>Where is your field?</Text>
        </View>

        <View style={styles.main}>
          <GooglePlacesAutocomplete
            placeholder="Enter Location"
            minLength={3}
            autoFocus={false}
            listViewDisplayed="auto"
            returnKeyType={"search"}
            fetchDetails={true}
            onPress={(data, details = null) => {
              setLatLon(details.geometry.location);
              setName(data.description);
            }}
            getDefaultValue={() => defaultValueMap}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyAUk9begav92si1W6yVe39GlOO7Au2aB0A",
              language: "en" // language of the results
              // types: "(cities)" // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                backgroundColor: "rgba(0,0,0,0)",
                borderTopWidth: 0,
                borderBottomWidth: 0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: "#5d5d5d",
                fontSize: 16,
                borderBottomWidth: 1
              },
              predefinedPlacesDescription: {
                color: "#1faadb"
              }
            }}
            debounce={200}
            currentLocation={true}
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GoogleReverseGeocoding"
          />
        </View>

        <View style={styles.bottom}>
          <Button
            disabled={latLon ? false : true}
            onPress={scrollForward}
            title="Select Date"
            color="white"
          />
        </View>
      </View>
    );
  }
}

export default inject("app")(observer(FieldLocation));
