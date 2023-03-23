import { NextFunction, Request, Response } from 'express';
import Mongoose from 'mongoose';
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
      
      return this._res.status(200).json(cars);
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

      const car = await this._service.findById(id);
      
      if (!car) return this._res.status(404).json({ message: 'Car not found' });

      return this._res.status(200).json(car);
    } catch (error) {
      this._next(error);
    }
  }
}