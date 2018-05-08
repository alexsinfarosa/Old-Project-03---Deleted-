import React from "react";
import { Container, Content, Footer, Button, Text, H1 } from "native-base";

import { Col, Grid } from "react-native-easy-grid";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Create Field - step 2",
    headerBackTitle: null
  };
  render() {
    return (
      <Container>
        <Grid>
          <Col style={{ justifyContent: "center", alignItems: "center" }}>
            <H1>Date of last irrigation</H1>
          </Col>
        </Grid>

        <Footer>
          <Content>
            <Button
              full
              success
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Text>Create Field</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}
