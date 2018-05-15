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
        console.log("when called...");
        this.readFromLocalstorage();
        reaction(
          () => this.asJson,
          json => {
            this.writeToLocalstorage(json);
            console.log("write to local storage");
          }
        );
      }
    );
  }

  id;
  latLon;
  irrigationDate;
  soilWaterCapacity = "Medium";
  crop = "Grass";
  isSelected = false;
  isLoading = false;

  setIrrigationDate = d => (this.irrigationDate = d);
  setLatLon = d => (this.latLon = d);

  get asJson() {
    return {
      id: this.id,
      latLon: this.latLon,
      irrigationDate: this.irrigationDate,
      soilWaterCapacity: this.soilWaterCapacity,
      crop: this.crop,
      isSelected: this.isSelected
    };
  }

  fields = [];
  addField = () => {
    const id = Date.now().toString();
    const field = { ...this.asJson, id };
    this.fields.push(field);
    this.writeToLocalstorage();
  };

  removeField = idx => {
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
      if (fields !== null) {
        this.fields = fields;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(FieldsStore, {
  id: observable,
  latLon: observable,
  irrigationDate: observable,
  soilWaterCapacity: observable,
  crop: observable,
  isSelected: observable,
  isLoading: observable,
  setField: action,
  removeField: action,
  fields: observable,
  setIrrigationDate: action,
  setLatLon: action
});
