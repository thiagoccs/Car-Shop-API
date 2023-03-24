import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async create(registerCar: ICar): Promise<ICar> {
    return this._model.create({ ...registerCar });
  }

  public async findAllCars(): Promise<ICar[]> {
    return this._model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this._model.findById(id);
  }

  public async updateById(id: string, carUpdated: ICar): Promise<ICar | null> {
    const car = this._model
      .findByIdAndUpdate(
        id,
        {
          ...carUpdated,
        },
        { new: true },
      );
    return car;
  }
}