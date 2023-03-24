import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async create(registerMotocycle: IMotorcycle): Promise<IMotorcycle> {
    return this._model.create({ ...registerMotocycle });
  }

  public async findAllMotorCycle(): Promise<IMotorcycle[]> {
    return this._model.find();
  }

  public async findByIdM(id: string): Promise<IMotorcycle | null> {
    return this._model.findById(id);
  }
}