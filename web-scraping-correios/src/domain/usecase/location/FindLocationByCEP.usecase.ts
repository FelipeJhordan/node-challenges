import { autoInjectable, inject } from 'tsyringe';
import { PuppeteerAdapterImp } from '../../../infra/web-scraping/puppeteer/PuppeteerAdapter.imp';
import { CEP_URL_CONSTANT } from '../../../shared/consts/cep.constants';
import { Location } from '../../model/location/location.model';
import { IWebScrapingAdapter } from '../protocols/adapters/web-scraping/IWebScraping.adapter';
import { IUsecase } from '../protocols/IUsecase';

@autoInjectable()
export class FindLocationByCepUsecase implements IUsecase<number, Location> {
  constructor(@inject(PuppeteerAdapterImp) private readonly webscraping: IWebScrapingAdapter) {}
  async execute(data: number) {
    // Could be have a additional layer called "data" with the implementation by determined tech like as http, web-scraping or other
    const webscrapingResult = await this.webscraping.find({
      url: CEP_URL_CONSTANT,
      body: {
        cep: data,
      },
    });
    return webscrapingResult;
  }
}
