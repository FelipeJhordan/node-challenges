import { Request, Response } from 'express';
import 'reflect-metadata';
import { FindLocationByCepUsecase } from '../../../../../src/domain/usecase/location/FindLocationByCEP.usecase';
import { IWebScrapingAdapter } from '../../../../../src/domain/usecase/protocols/adapters/web-scraping/IWebScraping.adapter';
import { FindLocationByCEPController } from '../../../../../src/presentation/controllers/location/FindLocationByCEP.controller';
const webscraping: IWebScrapingAdapter = {
  find: jest.fn(),
};

const findLocationByCEPUsecase: FindLocationByCepUsecase = new FindLocationByCepUsecase(webscraping);
findLocationByCEPUsecase.execute = jest.fn();

const sut = new FindLocationByCEPController(findLocationByCEPUsecase);

const requestStub = {
  params: {
    cep: 561378,
  },
} as unknown as Request;

const incorrectRequestStub = {
  params: {
    cep: 'dsadas',
  },
} as unknown as Request;

const responseStub = {
  json: jest.fn((r) => r),
} as unknown as Response;

describe('<FindLocationByCep>', () => {
  it('Should receive the correct param', async () => {
    const handleSpy = jest.spyOn(sut, 'handle');
    await sut.handle(requestStub, responseStub);
    expect(handleSpy).toBeCalledWith(requestStub, responseStub);
  });

  it('Should be return correct values', async () => {
    const responseSpy = jest.spyOn(responseStub, 'json');
    const location = await sut.handle(requestStub, responseStub);
    expect(responseSpy).toBeCalledWith(location);
  });

  it('Should call the usecase with correct params', async () => {
    const usecaseSpy = jest.spyOn(findLocationByCEPUsecase, 'execute');

    const location = await sut.handle(requestStub, responseStub);

    expect(usecaseSpy).toBeCalledWith(requestStub.params.cep);
  });

  it('Should receive incorrect param and throws error', async () => {
    const response = sut.handle(incorrectRequestStub, responseStub);
    await expect(response).rejects.toThrow();
  });
});
