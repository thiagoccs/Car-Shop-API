import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motossMock: IMotorcycle[] = [
  {
    id: 'Cruzeiro Cabuloso',
    model: 'mototax',
    year: 2012,
    color: 'Silver',
    status: false,
    buyValue: 35,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: 'Frangas',
    model: 'lambreta',
    year: 2018,
    color: 'Gold',
    status: true,
    buyValue: 80,
    category: 'Street',
    engineCapacity: 800,
  },
];

const motoByIdMock: IMotorcycle = {
  id: 'Frangas',
  model: 'lambreta',
  year: 2018,
  color: 'Darck Blue',
  status: true,
  buyValue: 80,
  category: 'Street',
  engineCapacity: 800,
};

const inputMoto: IMotorcycle = {
  model: 'lambreta',
  year: 2018,
  color: 'Darck Blue',
  status: true,
  buyValue: 80,
  category: 'Street',
  engineCapacity: 800,
};

export default motossMock;
export { motoByIdMock, inputMoto };