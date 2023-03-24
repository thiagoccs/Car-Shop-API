import { NextFunction, Request, Response } from 'express';
import Mongoose from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = this._req.body;

    try {
      const newMotorcycle = await this._service.registerMotorcycle(motorcycle);

      return this._res.status(201).json(newMotorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async findAllMotorcycle() {
    try {
      const motorcycle = await this._service.findAllMotorcycle();
      
      return this._res.status(200).json(motorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async findById() {
    const { id } = this._req.params;

    try {
      if (!Mongoose.isValidObjectId(id)) {
        return this._res.status(422).json({ message: 'Invalid mongo id' });
      }

      const motorcycle = await this._service.findByIdM(id);

      if (!motorcycle) return this._res.status(404).json({ message: 'Motorcycle not found' });

      return this._res.status(200).json(motorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async updateById() {
    const { id } = this._req.params;
    const newValuesToMotorcycle: IMotorcycle = this._req.body;

    try {
      if (!Mongoose.isValidObjectId(id)) {
        return this._res.status(422).json({ message: 'Invalid mongo id' });
      }

      const motorcycle = await this._service.updateById(id, newValuesToMotorcycle);
      // console.log(car);

      if (!motorcycle) return this._res.status(404).json({ message: 'Motorcycle not found' });

      return this._res.status(200).json(motorcycle);
    } catch (error) {
      this._next(error);
    }
  }
}