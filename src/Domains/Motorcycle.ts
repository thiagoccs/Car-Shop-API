import IMotorcycle from '../Interfaces/IMotorcycle';
import ECategory from '../Utils/enums';

export default class Motorcycle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: ECategory;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = (!motorcycle.status) ? false : motorcycle.status;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  getModel() {
    return this.model;
  }

  setModel(value: string) {
    this.model = value;
  }

  getYear() {
    return this.year;
  }

  setYear(value: number) {
    this.year = value;
  }

  getColor() {
    return this.color;
  }

  setColor(value: string) {
    this.color = value;
  }

  getStatus() {
    return this.status;
  }

  setStatus(value: boolean) {
    this.status = value;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(value: number) {
    this.buyValue = value;
  }

  getCategory() {
    return this.category;
  }

  setCategory(value: ECategory) {
    this.category = value;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }

  setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}