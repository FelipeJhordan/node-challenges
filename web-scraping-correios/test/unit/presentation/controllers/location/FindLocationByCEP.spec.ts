import { Request, response } from 'express';
import { FindLocationByCEP } from '../../../../../src/presentation/controllers/location/FindLocationByCEP.controller';

const sut = new FindLocationByCEP();

const requestStub = {
  params: {
    cep: 561378,
  },
} as unknown as Request;

describe('<FindLocationByCep>', () => {
  it('Should receive the correct param', async () => {
    const handleSpy = jest.spyOn(sut, 'handle');
    await sut.handle(requestStub, response);
    expect(sut.handle).toBeCalledWith(requestStub, response);
  });
});
