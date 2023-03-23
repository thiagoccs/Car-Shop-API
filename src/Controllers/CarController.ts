import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CarService();
  }

  public async create() {
    const car: ICar = this._req.body;

    try {
      const newCar = await this._service.registerCar(car);
      // console.log(newCar);
      
      return this._res.status(201).json(newCar);
    } catch (error) {
      this._next(error);
    }
  }

  public async findAllCars() {
    try {
      const cars = await this._service.findAllCars();
      // console.log(newCar);
      
      return this._res.status(201).json(cars);
    } catch (error) {
      this._next(error);
    }
  }
}