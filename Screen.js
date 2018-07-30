import React from "react";
import { inject, observer } from "mobx-react";

import { View } from "react-native";

import SwiperAddField from "./screens/SwiperAddField/SwiperAddField";
// import SwiperMain from "./screens/SwiperMain/SwiperMain";

class Screen extends React.Component {
  render() {
    return <SwiperAddField />;
  }
}
export default inject("app")(observer(Screen));
