// import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    model: string,
    year: number,
    color: string,
    // status: boolean | undefined,
    buyValue: number,
    doorsQty: number,
    seatsQty: number,
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    // this.status = (!status) ? false : status;
    // this.status = false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
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