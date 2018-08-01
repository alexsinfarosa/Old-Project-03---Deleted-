import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet } from "react-native";

import Swiper from "react-native-swiper";

import ForecastScreen from "./ForecastScreen";
import FieldsScreen from "./FieldsScreen";
import Main from "./Main";

class SwiperMain extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    idx: 1
  };

  scrollForward = () => this.myRef.current.scrollBy(1);
  scrollBack = () => this.myRef.current.scrollBy(-1);

  render() {
    return (
      <Swiper
        showsButtons={false}
        showsPagination={false}
        loop={false}
        index={1}
        ref={this.myRef}
        onIndexChanged={idx => this.setState({ idx })}
        activeDotColor="#355691"
      >
        <ForecastScreen
          idx={this.state.idx}
          scrollForward={this.scrollForward}
        />
        <Main
          field={this.props.app.fieldsStore.selectedField}
          idx={this.state.idx}
          scrollBack={this.scrollBack}
          scrollForward={this.scrollForward}
          scrollTo={this.props.scrollTo}
        />
        <FieldsScreen
          idx={this.state.idx}
          scrollBack={this.scrollBack}
          scrollTo={this.props.scrollTo}
        />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default inject("app")(observer(SwiperMain));
