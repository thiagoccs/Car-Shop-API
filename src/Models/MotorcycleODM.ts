import { model, Model, models, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleODM {
  private _schema: Schema;
  private _model: Model<IMotorcycle>;

  constructor() {
    this._schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this._model = models.Motorcycle || model('Motorcycle', this._schema);
  }
}