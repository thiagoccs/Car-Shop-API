export default abstract class Veihicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean | undefined,
    buyValue: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = (!status) ? false : status;
    this.buyValue = buyValue;
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
}