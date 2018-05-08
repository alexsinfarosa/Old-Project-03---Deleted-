import React from "react";
import { Container, Content, Footer, Button, Text, H1 } from "native-base";

import { Col, Grid } from "react-native-easy-grid";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Create Field - step 1",
    headerBackTitle: null
  };
  render() {
    return (
      <Container>
        <Grid>
          <Col style={{ justifyContent: "center", alignItems: "center" }}>
            <H1>Where is your field?</H1>
          </Col>
        </Grid>

        <Footer>
          <Content>
            <Button
              full
              success
              onPress={() => this.props.navigation.navigate("Step2")}
            >
              <Text>Continue</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}
