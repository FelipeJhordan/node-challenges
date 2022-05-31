import { Browser } from 'puppeteer';
import { IWebScrapingAdapter } from '../../../domain/usecase/protocols/adapters/web-scraping/IWebScraping.adapter';
import { IWebScrapingParams } from '../../../domain/usecase/protocols/adapters/web-scraping/IWebScraping.params';
import { formatCep } from '../../../shared/utils/string/formatCep';
import { startBrowser } from './utils/browser';

export class PuppeteerAdapterImp implements IWebScrapingAdapter {
  puppeterBrowserPromise;

  constructor() {
    this.puppeterBrowserPromise = startBrowser() as unknown as Browser;
  }

  find = async (data: IWebScrapingParams) => {
    const errorCep = 'Cep inválido ou não completo.';
    const cep = data.body.cep;
    const puppeterBrowser = await this.puppeterBrowserPromise;
    const page = await puppeterBrowser.newPage();

    try {
      await page?.goto(data.url);

      await page.type('input[name=endereco]', `${cep}`, { delay: 10 });

      await page?.click('#btn_pesquisar');

      await page.waitForTimeout(3 * 1000);

      const CEP = await page.$eval(`td[data-th="CEP"]`, (el) => el.textContent);

      if (!CEP || formatCep(CEP) != `${cep}`) {
        throw new Error();
      }

      const road = await page.$eval(`td[data-th="Logradouro/Nome"]`, (el) => el.textContent);
      const neighborhood = await page.$eval(`td[data-th="Logradouro/Nome"]`, (el) => el.textContent);
      const { city, state } = await page.$eval(`td[data-th="Localidade/UF"]`, (el) => {
        const localidade = el.textContent?.split('/') as string[];

        return {
          city: localidade[0],
          state: localidade[1],
        };
      });

      return {
        road,
        neighborhood,
        city,
        state,
      };
    } catch (e) {
      console.error(e);
      return {
        message: errorCep,
      };
    } finally {
      page.close({ runBeforeUnload: true });
    }
  };
}
