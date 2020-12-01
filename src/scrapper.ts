import puppeteer from 'puppeteer';

const scrapper = {
  screenshot : async (link:string) => {
    let screenshotName: string = link.split('.')[1];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log("browser done", link)
    await page.goto("http://" + link);
    await page.screenshot({path : `./screenshots/${screenshotName}.png`});
    await browser.close();
  }  
}

export default scrapper;