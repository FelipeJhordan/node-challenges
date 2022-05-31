import pupppeteer from 'puppeteer';

export const startBrowser = async () => {
  let browser;
  try {
    console.info('Opening the browser.....');
    browser = await pupppeteer.launch({
      headless: false,
      args: ['--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.error('Could not create a browser instance => ', err);
  }

  return browser;
};
