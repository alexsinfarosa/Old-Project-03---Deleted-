import React from "react";
import { Container, Content, Footer, Button, Text, H1 } from "native-base";
import { inject, observer } from "mobx-react";
import DatePicker from "react-native-datepicker";
import { Row, Col, Grid } from "react-native-easy-grid";

class CreateField2 extends React.Component {
  static navigationOptions = {
    title: "Create Field - step 2",
    headerBackTitle: null
  };

  render() {
    const {
      irrigationDate,
      setIrrigationDate,
      addField,
      setIsSwiper
    } = this.props.app.fieldsStore;
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
              <H1 style={{ marginBottom: 30 }}>Date of last irrigation</H1>

              <DatePicker
                style={{ width: "100%" }}
                date={irrigationDate}
                mode="date"
                placeholder="Select Date"
                format="MMMM Do, YYYY"
                showIcon={false}
                // minDate="2016-05-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateText: {
                    fontSize: 16,
                    color: "#646464"
                  },
                  placeholderText: {
                    fontSize: 16,
                    color: "#B0B0B0"
                  },
                  dateInput: {
                    // marginLeft: 36
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderColor: "#171717",
                    alignItems: "flex-start"
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => setIrrigationDate(date)}
              />
            </Col>
          </Row>
        </Grid>

        <Footer>
          <Content>
            <Button
              full
              success
              onPress={() => {
                addField();
                this.props.navigation.navigate("Step3");
              }}
            >
              <Text>Create Field</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}

export default inject("app")(observer(CreateField2));
