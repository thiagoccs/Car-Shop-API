import ICar from '../../../src/Interfaces/ICar';

const carrosMock: ICar[] = [
  {
    model: 'SpaceFox',
    year: 2012,
    color: 'Silver',
    buyValue: 35,
    doorsQty: 4,
    seatsQty: 5,
    status: false,
    id: 'Cruzeiro Cabuloso',
  },
  {
    model: 'Polo',
    year: 2018,
    color: 'Dack Blue',
    buyValue: 80,
    doorsQty: 4,
    seatsQty: 5,
    status: true,
    id: 'Frangas',
  },
];

const carroByIdMock: ICar = {
  model: 'SpaceFox',
  year: 2012,
  color: 'Silver',
  buyValue: 35,
  doorsQty: 4,
  seatsQty: 5,
  status: false,
  id: 'Cruzeiro Cabuloso',
};

export default carrosMock;
export { carroByIdMock };