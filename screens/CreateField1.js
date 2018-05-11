import React from "react";
import {
  Container,
  Content,
  Footer,
  Button,
  Text,
  H1,
  View
} from "native-base";
import { inject, observer } from "mobx-react";

import { Row, Col, Grid } from "react-native-easy-grid";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

class CreateField1 extends React.Component {
  static navigationOptions = {
    title: "Create Field - step 1",
    headerBackTitle: null
  };

  state = {
    initialPosition: "unknown",
    lastPosition: "unknown",
    watchID: null
  };

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     const lat = parseFloat(position.coords.latitude);
  //     const lon = parseFloat(position.coords.longitude);
  //     console.log(lat, lon);
  //   });
  // }

  render() {
    const { latLon, setLatLon } = this.props.app.paramsStore;
    console.log(latLon);
    return (
      <Container>
        <Grid>
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <Col style={{ height: 300 }}>
              <H1>Where is your field?</H1>

              <GooglePlacesAutocomplete
                placeholder="Enter Location"
                minLength={3}
                autoFocus={false}
                listViewDisplayed="auto"
                returnKeyType={"search"}
                fetchDetails={true}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  setLatLon(details.geometry.location);
                  console.log(details.geometry.location);
                }}
                textInputProps={{
                  ref: textInput => {
                    console.log(textInput);
                  }
                }}
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
              {latLon && (
                <View>
                  <Text>{latLon.lat}</Text>
                  <Text>{latLon.lng}</Text>
                </View>
              )}
            </Col>
          </Row>
        </Grid>

        <Footer>
          <Content>
            <Button
              full
              success
              disabled={latLon ? false : true}
              onPress={() => this.props.navigation.navigate("Step2")}
            >
              <Text>Create Field</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}

export default inject("app")(observer(CreateField1));
