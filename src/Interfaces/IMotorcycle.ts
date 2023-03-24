import ECategory from '../Utils/enums';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: ECategory;
  engineCapacity: number;
}