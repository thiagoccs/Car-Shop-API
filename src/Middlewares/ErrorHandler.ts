import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error.message === 'Invalid mongo id') res.status(422).json({ message: error.message });
    res.status(500).json({ message: error.message });
    next();
  }
}