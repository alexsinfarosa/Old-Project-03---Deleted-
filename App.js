import React from "react";
import { StackNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Subtitle,
  Footer,
  Button,
  Text,
  H1
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

// Screens components
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    About: {
      screen: AboutScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomColor: "#fff"
      }
      // headerTintColor: "red",
      // headerTitleStyle: {
      //   fontWeight: "bold"
      // }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Create Field</Title>
            <Subtitle>Step 1</Subtitle>
          </Body>
        </Header>

        <Grid>
          <Col style={{ justifyContent: "center", alignItems: "center" }}>
            <H1>Where is your field?</H1>
          </Col>
        </Grid>

        <Footer>
          <Content>
            <Button full success>
              <Text>Continue</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}
