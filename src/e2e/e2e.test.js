import puppetteer from "puppeteer";
import { fork } from "child_process";
jest.setTimeout(30000);
describe("test validator form", () => {
  let browser;
  let page;
  let server;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();

  });


  test("tooltip show on page", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".container");
    const button = await page.$(".btn");
    await button.click();
    await page.waitForSelector(".tooltip");
  });


  test("test", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector("body"); //этот метод заставит браузер ждать появления селектора body
  })


});
