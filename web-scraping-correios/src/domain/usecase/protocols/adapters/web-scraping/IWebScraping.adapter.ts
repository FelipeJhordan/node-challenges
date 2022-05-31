import { IWebScrapingParams } from './IWebScraping.params';

export interface IWebScrapingAdapter {
  find: (data: IWebScrapingParams) => Promise<any>;
}
