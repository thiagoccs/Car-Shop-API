import { NextFunction, Request, Response } from 'express';
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
}