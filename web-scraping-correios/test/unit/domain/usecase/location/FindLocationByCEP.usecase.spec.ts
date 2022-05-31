import 'reflect-metadata';
import { Location } from '../../../../../src/domain/model/location/location.model';
import { FindLocationByCepUsecase } from '../../../../../src/domain/usecase/location/FindLocationByCEP.usecase';
const sut = new FindLocationByCepUsecase();

const locationStub: Location = {
  city: 'Uberaba',
  state: 'MG',
  neighborhood: 'Alfredo Freire',
  road: 'Rua Mônica Machiyama, 729',
};

const cep = 2321312;

describe('<FindLocationByCEP>', () => {
  it('Should receive the correct param', async () => {
    const executeSpy = jest.spyOn(sut, 'execute');

    await sut.execute(cep);

    expect(executeSpy).toBeCalledWith(cep);
  });
  it('Should return the correct Location', async () => {
    const executeSpy = jest.spyOn(sut, 'execute').mockReturnValueOnce(Promise.resolve(locationStub));

    const Location = await sut.execute(cep);

    expect(Location).toEqual(locationStub);
  });
});
