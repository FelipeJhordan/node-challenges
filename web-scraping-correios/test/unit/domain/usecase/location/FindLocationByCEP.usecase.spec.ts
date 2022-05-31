import 'reflect-metadata';
import { Location } from '../../../../../src/domain/model/location/location.model';
import { FindLocationByCepUsecase } from '../../../../../src/domain/usecase/location/FindLocationByCEP.usecase';
import { IWebScrapingAdapter } from '../../../../../src/domain/usecase/protocols/adapters/web-scraping/IWebScraping.adapter';
import { CEP_URL_CONSTANT } from '../../../../../src/shared/consts/cep.constants';

const webscraping: IWebScrapingAdapter = {
  find: jest.fn(),
};

const sut = new FindLocationByCepUsecase(webscraping);

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
    jest.spyOn(sut, 'execute').mockReturnValueOnce(Promise.resolve(locationStub));

    const Location = await sut.execute(cep);

    expect(Location).toEqual(locationStub);
  });

  it('Should call webscraping with correct params', async () => {
    const webscrapingSpy = jest.spyOn(webscraping, 'find');

    await sut.execute(cep);

    expect(webscrapingSpy).toBeCalledWith({
      url: CEP_URL_CONSTANT,
      body: {
        cep: cep,
      },
    });
  });
});
