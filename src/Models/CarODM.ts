import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private _schema: Schema;
  private _model: Model<ICar>;

  constructor() {
    this._schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this._model = models.Car || model('Car', this._schema);
  }

  public async create(registerCar: ICar): Promise<ICar> {
    return this._model.create({ ...registerCar });
  }

  public async findAll(): Promise<ICar[]> {
    return this._model.find();
  }
}