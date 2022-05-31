import { FindLocationByCepUsecase } from '../../../../../src/domain/usecase/location/FindLocationByCEP.usecase';

const sut = new FindLocationByCepUsecase();

const cep = 2321312;

describe('<FindLocationByCEP>', () => {
  it('Should receive the correct param', async () => {
    const executeSpy = jest.spyOn(sut, 'execute');

    await sut.execute(cep);

    expect(executeSpy).toBeCalledWith(cep);
  });
});
