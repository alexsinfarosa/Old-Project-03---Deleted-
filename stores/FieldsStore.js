import {
  decorate,
  observable,
  action,
  computed,
  reaction,
  when,
  toJS
} from "mobx";
import ParamsStore from "./ParamsStore";
import { AsyncStorage } from "react-native";

export default class FieldsStore {
  constructor() {
    when(
      () => !this.isLoading,
      () => {
        this.readFromLocalstorage();
        reaction(() => this.asJson, json => this.writeToLocalstorage(json));
      }
    );
  }

  defaultRoute = "Step1";
  setDefaultRoute = d => (this.defaultRoute = d);

  id;
  name;
  latLon;
  irrigationDate;
  soilWaterCapacity = "Medium";
  crop = "Grass";
  isSelected = false;
  isLoading = false;

  setIrrigationDate = d => (this.irrigationDate = d);
  setLatLon = d => (this.latLon = d);
  setName = d => (this.name = d);

  get asJson() {
    return {
      id: this.id,
      name: this.name,
      latLon: this.latLon,
      irrigationDate: this.irrigationDate,
      soilWaterCapacity: this.soilWaterCapacity,
      crop: this.crop,
      isSelected: this.isSelected
    };
  }

  fields = [];
  addField = () => {
    if (this.fields.length !== 0) {
      this.fields.map(field => (field.isSelected = false));
    }
    const id = Date.now().toString();
    const field = { ...this.asJson, id };
    field.isSelected = true;
    this.fields.push(field);
    this.writeToLocalstorage();
  };

  selectField = id => {
    this.fields.map(field => {
      field.id === id ? (field.isSelected = true) : (field.isSelected = false);
    });
  };

  get selectedField() {
    if (this.fields.length !== 0) {
      const field = this.fields.filter(field => field.isSelected)[0];
      return !field ? this.fields[0] : field;
    }
  }

  removeField = id => {
    const idx = this.fields.findIndex(field => field.id === id);
    this.fields.splice(idx, 1);
    this.writeToLocalstorage();
  };

  //   localstorage
  writeToLocalstorage = async () => {
    const fields = this.fields.slice();
    try {
      await AsyncStorage.setItem(`irriTool-model`, JSON.stringify(fields));
    } catch (error) {
      console.log(`There was an error writing to asynStorage: ${error}`);
    }
  };

  readFromLocalstorage = async () => {
    try {
      const retreivedField = await AsyncStorage.getItem("irriTool-model");
      const fields = JSON.parse(retreivedField);
      console.log(fields);
      if (fields.length !== 0) {
        fields[fields.length - 1].isSelected = true;
        this.fields = fields;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(FieldsStore, {
  defaultRoute: observable,
  setDefaultRoute: action,
  id: observable,
  name: observable,
  latLon: observable,
  irrigationDate: observable,
  soilWaterCapacity: observable,
  crop: observable,
  isSelected: observable,
  isLoading: observable,
  setField: action,
  setName: action,
  removeField: action,
  fields: observable,
  selectedField: computed,
  selectField: action,
  setIrrigationDate: action,
  setLatLon: action
});
