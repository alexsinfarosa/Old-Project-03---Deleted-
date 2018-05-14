import { decorate, observable, action } from "mobx";

export default class ParamsStore {
  latLon;
  setLatLon = d => (this.latLon = d);
  date;
  setDate = d => (this.date = d);
}

decorate(ParamsStore, {
  latLon: observable,
  setLatLon: action,
  date: observable,
  setDate: action
});
