import fs from "fs";
import puppeteer from "puppeteer";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ params }) => {
		const browser = await puppeteer.launch();

		// Open a new page
		const page = await browser.newPage();

		// Set the viewport size to match your app's dimensions
		await page.setViewport({ width: 1080, height: 160 });

		// Navigate to your SvelteKit app's local development server URL
		await page.goto(`http://localhost:5173/${params.input}`);

		// Wait for your app to finish rendering (you might need to adjust the timeout based on your app's complexity)
		await page.waitForTimeout(50);

		// Capture a screenshot of the entire page
		const screenshot = await page.screenshot({ fullPage: false, omitBackground: true });

		// Save the screenshot as a PNG file
		fs.writeFileSync(`./output/${params.input}.png`, screenshot);

		// Close the browser
		await browser.close();

		console.log(`Screenshot saved as ${params.input}.png`);
	},
};
