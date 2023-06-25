import fs from "fs";
import puppeteer from "puppeteer";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const browser = await puppeteer.launch();

		try {
			const lines = fs
				.readFileSync("src/lib/lines.txt", "utf-8")
				.split("\n")
				.map((item) => item.trim());
			try {
				const page = await browser.newPage();
				await page.setViewport({ width: 1080, height: 160 });

				let i = 0;
				for (const line of lines) {
					if (line.trim() !== "") {
						await page.goto(`http://localhost:5173/${line}`);
						await page.waitForTimeout(50);
						const screenshot = await page.screenshot({ fullPage: false, omitBackground: true });
						fs.writeFileSync(`./output/${i.toString().padStart(3, "0")}_${line}.png`, screenshot);
						console.log(`Screenshot saved as ${i.toString().padStart(3, "0")}_${line}.png`);
						i++;
					}
				}
			} finally {
				await browser.close();
			}
		} catch (error) {
			console.error(error);
		}
	},
};
