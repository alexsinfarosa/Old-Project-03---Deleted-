import { decorate, observable, action, computed, reaction, when } from "mobx";
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

  isLoading = false;
  latLon;
  setLatLon = d => (this.latLon = d);
  irrigationDate;
  setIrrigationDate = d => (this.irrigationDate = d);
  soilWaterCapacity = "Medium";
  crop = "Grass";
  isSelected = false;

  fields = new Map();
  addField = () => {
    const id = Date.now().toString();
    const field = {
      latLon: this.latLon,
      irrigationDate: this.irrigationDate,
      soilWaterCapacity: this.soilWaterCapacity,
      crop: this.crop,
      isSelected: this.isSelected
    };
    console.log(id, field);
    this.fields.set(id, field);
  };

  //   localstorage
  writeToLocalstorage = async json => {
    try {
      await AsyncStorage.setItem("irriTool-model", JSON.stringify(json));
    } catch (error) {
      console.log(error);
    }
  };

  readFromLocalstorage = async () => {
    try {
      const value = AsyncStorage.getItem("irriTool-model");
      console.log(value);
      if (value !== null) {
        this.latLon = params.latLon;
        this.irrigationDate = params.irrigationDate;
        this.soilWaterCapacity = params.soilWaterCapacity;
        this.crop = params.crop;
        this.isSelected = params.isSelected;
      }
    } catch (error) {
      console.log(error);
    }
  };

  get asJson() {
    return {
      latLon: this.latLon,
      irrigationDate: this.irrigationDate,
      soilWaterCapacity: this.soilWaterCapacity,
      crop: this.crop,
      isSelected: this.isSelected
    };
  }
}

decorate(FieldsStore, {
  isLoading: observable,
  latLon: observable,
  setLatLon: action,
  irrigationDate: observable,
  setIrrigationDate: action,
  soilWaterCapacity: observable,
  crop: observable,
  isSelected: observable,
  fields: observable,
  addField: action
});
