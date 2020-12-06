import puppeteer from 'puppeteer';
import textToImage from 'text-to-image';
import { functionsObject } from './types/types';
const letters: string[] = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'y',
	'z',
];

const helpers: functionsObject = {
	randomNum: (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min),
	randomTxtGen: function (length: number): string {
		let genratedTxt: string = '';
		for (let i = length; i >= 0; i--) {
			genratedTxt += letters[this.randomNum(0, 23)];
		}
		return genratedTxt;
	},
};

const functions = {
	screenshot: async (link: string) => {
		let screenshotName: string = link.split('.')[1];
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		console.log('browser done', link);
		await page.goto('http://' + link);
		await page.screenshot({ path: `./screenshots/${screenshotName}.png` });
		await browser.close();
		return screenshotName + '.png';
	},
	speedTest: (length: number): Promise<string> => {
    let testText = helpers.randomTxtGen(length);
    process.env.testText = testText;
    process.env.testStartTime = Date.now().toString();
		return textToImage.generate(testText, {
			maxWidth: length * 10,
		});
	}
};

export default functions;
