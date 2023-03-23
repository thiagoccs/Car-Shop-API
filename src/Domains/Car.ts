// import ICar from '../Interfaces/ICar';

import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = (!car.status) ? false : car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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
  
  getDoorsQty() {
    return this.doorsQty;
  }

  setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  getSeatsQty() {
    return this.seatsQty;
  }

  setBSeatsQty(value: number) {
    this.seatsQty = value;
  }
}