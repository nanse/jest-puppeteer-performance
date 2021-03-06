import * as puppeteer from 'puppeteer';
import { analyzePerformance } from '..';

describe('Performance Test', async () => {
    let page: puppeteer.Page;
    let browser: puppeteer.Browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    afterAll(async () => {
        await browser.close();
    });

    it('Should be performant', async () => {
        await analyzePerformance(page);
    });
});
