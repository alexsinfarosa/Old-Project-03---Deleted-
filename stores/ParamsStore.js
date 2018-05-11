import { decorate, observable, action } from "mobx";

export default class ParamsStore {
  latLon;
  setLatLon = d => (this.latLon = d);
}

decorate(ParamsStore, {
  latLon: observable,
  setLatLon: action
});
