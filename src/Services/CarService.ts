import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car.model,
        car.year,
        car.color,
        car.buyValue,
        car.doorsQty,
        car.seatsQty,
      );
    }

    return null;
  }

  public async registerCar(car: ICar) {
    // Criar instância da Model de Car usando Mongoose
    const carODM = new CarODM();
    // Inserir os dados no banco
    const newCar = await carODM.create(car);
    // console.log(newCar);
    
    // Retornar os dados com o id
    return this.createCarDomain(newCar);
  }
}