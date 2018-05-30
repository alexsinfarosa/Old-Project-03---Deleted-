import React from "react";
import {
  Container,
  Content,
  Footer,
  Button,
  H1,
  View,
  Text
} from "native-base";
import { inject, observer } from "mobx-react";

import { Row, Col, Grid } from "react-native-easy-grid";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

class CreateField1 extends React.Component {
  static navigationOptions = {
    title: "Create Field - step 1",
    headerBackTitle: null
  };

  render() {
    const { latLon, setLatLon, setName } = this.props.app.fieldsStore;

    return (
      <Container>
        <Grid>
          <Row
            style={{
              backgroundColor: "#fff",
              paddingLeft: 15,
              paddingRight: 15
            }}
          >
            <Col style={{ height: 330, marginTop: 15 }}>
              <H1 style={{ marginBottom: 30 }}>Where is your field?</H1>

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
              <Text>Select Date</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}

export default inject("app")(observer(CreateField1));
