import { model, Model, models, Schema } from 'mongoose';

export default class AbstractODM<T> {
  protected _schema: Schema;
  protected _model: Model<T>;
  protected _selectModel: string;

  constructor(schema: Schema, selectModel: string) {
    this._schema = schema;
    this._selectModel = selectModel;
    this._model = models[this._selectModel] || model(this._selectModel, this._schema);
  }
}