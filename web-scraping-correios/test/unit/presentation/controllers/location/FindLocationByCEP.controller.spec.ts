import { Request, Response } from 'express';
import { FindLocationByCEP } from '../../../../../src/presentation/controllers/location/FindLocationByCEP.controller';

const sut = new FindLocationByCEP();

const requestStub = {
  params: {
    cep: 561378,
  },
} as unknown as Request;

const responseStub = {
  json: jest.fn((r) => r),
} as unknown as Response;

describe('<FindLocationByCep>', () => {
  it('Should receive the correct param', async () => {
    const handleSpy = jest.spyOn(sut, 'handle');
    await sut.handle(requestStub, responseStub);
    expect(sut.handle).toBeCalledWith(requestStub, responseStub);
  });

  it('Should be return correct values', async () => {
    const responseSpy = jest.spyOn(responseStub, 'json');
    const location = await sut.handle(requestStub, responseStub);
    expect(responseSpy).toBeCalledWith(location);
  });
});
