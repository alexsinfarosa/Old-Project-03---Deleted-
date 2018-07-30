import React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, View, Text } from "react-native";

import Swiper from "react-native-swiper";

import FieldLocation from "./FieldLocation";
import FieldDate from "./FieldDate";
import SwiperMain from "../SwiperMain/SwiperMain";

class SwiperAddField extends React.Component {
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
        <FieldLocation
          idx={this.state.idx}
          scrollForward={this.scrollForward}
        />
        <FieldDate
          idx={this.state.idx}
          scrollBack={this.scrollBack}
          scrollForward={this.scrollForward}
        />
        <SwiperMain
          idx={this.state.idx}
          // scrollBack={this.scrollBack}
          // scrollForward={this.scrollForward}
        />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default inject("app")(observer(SwiperAddField));
