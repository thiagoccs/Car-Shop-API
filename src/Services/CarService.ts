import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
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

  public async findAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.findAllCars();
    const carsFixed = cars.map((car) => this.createCarDomain(car));
    return carsFixed;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    // console.log(carODM);
    
    const car = await carODM.findById(id);
    return this.createCarDomain(car);
  }
}