import pupppeteer from 'puppeteer';

export const startBrowser = async () => {
  let browser;
  try {
    console.info('Opening the browser.....');
    browser = await pupppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.error('Could not create a browser instance => ', err);
  }

  return browser;
};
