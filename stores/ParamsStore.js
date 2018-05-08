import { decorate, observable, action } from "mobx";

export default class ParamsStore {
  title = "Main";
  setMainTitle = i => {
    if (i === 0) this.title = "Fields";
    if (i === 1) this.title = "Main";
    if (i === 2) this.title = "Forecast";
  };
}

decorate(ParamsStore, {
  title: observable,
  setMainTitle: action
});
