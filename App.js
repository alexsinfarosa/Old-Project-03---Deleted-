import React from "react";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

//  mobx
const app = new RootStore();

import Screen from "./Screen";

export default class App extends React.Component {
  render() {
    return (
      <Provider app={app}>
        <Screen />
      </Provider>
    );
  }
}
