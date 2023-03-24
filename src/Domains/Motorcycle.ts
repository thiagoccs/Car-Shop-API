import IMotorcycle from '../Interfaces/IMotorcycle';
import Veihicle from './Vehicle';

export default class Motorcycle extends Veihicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(
      motorcycle.id,
      motorcycle.model,
      motorcycle.year,
      motorcycle.color,
      motorcycle.status,
      motorcycle.buyValue,
    );
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  getCategory() {
    return this.category;
  }

  setCategory(value: string) {
    this.category = value;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }

  setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}