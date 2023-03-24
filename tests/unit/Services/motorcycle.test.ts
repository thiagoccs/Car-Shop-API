import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import motossMock, { inputMoto, motoByIdMock } from './motorcycle.mock';

describe('Deveria criar uma moto', function () {
  it('Deveria criar um carro com SUCESSO', async function () {
    const outMotorcycle: Motorcycle = new Motorcycle(inputMoto);

    sinon.stub(Model, 'create').resolves(inputMoto);
    sinon.stub(Model, 'findOne').resolves(outMotorcycle);

    const service = new MotorcycleService();
    const result = await service.registerMotorcycle(inputMoto);

    expect(result).to.be.deep.equal(outMotorcycle);
  });

  it('Deveria retornar todos as motos', async function () {
    sinon.stub(Model, 'find').resolves(motossMock);

    const service = new MotorcycleService();
    const result = await service.findAllMotorcycle();

    expect(result).to.be.deep.equal(motossMock);
  });

  it('Deveria retornar uma moto pelo Id', async function () {
    sinon.stub(Model, 'findById').resolves(motoByIdMock);

    const service = new MotorcycleService();
    const result = await service.findByIdM('Cruzeiro Cabuloso');
    
    expect(result).to.be.deep.equal(motoByIdMock);
  });

  it('Deveria retornar null em caso de um Id inválido', async function () {
    sinon.stub(Model, 'findById').resolves();

    const service = new MotorcycleService();
    const result = await service.findByIdM('Frangas');    
    
    expect(result).to.be.deep.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});