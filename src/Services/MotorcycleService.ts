import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }

    return null;
  }

  public async registerMotorcycle(motorcycle: IMotorcycle) {
    // Criar instância da Model de Motorcycle usando Mongoose
    const motorcycleODM = new MotorcycleODM();
    // Inserir os dados no banco
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    // console.log(newMotorcycle);
    
    // Retornar os dados com o id
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAllMotorcycle() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findAllMotorCycle();
    const motorcyclesFixed = motorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcyclesFixed;
  }

  public async findByIdM(id: string) {
    const motorcycleODM = new MotorcycleODM();
    
    const motorcycle = await motorcycleODM.findByIdM(id);
    return this.createMotorcycleDomain(motorcycle);
  }
}