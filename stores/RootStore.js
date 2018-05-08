import ParamsStore from "../stores/ParamsStore";

export default class RootStore {
  constructor() {
    this.paramsStore = new ParamsStore();
  }
}
