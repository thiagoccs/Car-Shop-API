import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import carrosMock, { carroByIdMock } from './cars.mock';

describe('Deveria criar um carro', function () {
  it('Deveria criar um carro com SUCESSO', async function () {
    const inputCar: ICar = {
      model: 'SpaceFox',
      year: 2012,
      color: 'Silver',
      buyValue: 35,
      doorsQty: 4,
      seatsQty: 5,
      status: false,
    };

    const outputCar: Car = new Car(inputCar);

    sinon.stub(Model, 'create').resolves(inputCar);
    sinon.stub(Model, 'findOne').resolves(outputCar);

    const service = new CarService();
    const result = await service.registerCar(inputCar);

    expect(result).to.be.deep.equal(outputCar);
  });

  it('Deveria retornar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carrosMock);

    const service = new CarService();
    const result = await service.findAllCars();

    expect(result).to.be.deep.equal(carrosMock);
  });

  it('Deveria retornar um carro pelo ID', async function () {
    sinon.stub(Model, 'findById').resolves(carroByIdMock);

    const service = new CarService();
    const result = await service.findById('Cruzeiro Cabuloso');
    
    expect(result).to.be.deep.equal(carroByIdMock);
  });

  it('Deveria retornar um Id inválido', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new CarService();
    const result = await service.findById('Frangas');    
    
    expect(result).to.be.deep.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});