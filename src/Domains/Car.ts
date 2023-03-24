import ICar from '../Interfaces/ICar';
import Veihicle from './Vehicle';

export default class Car extends Veihicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(
      car.id,
      car.model,
      car.year,
      car.color,
      car.status,
      car.buyValue,
    );
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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