const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage();

    await page.goto(
        'https://dungeonslasher.wiki/',
        {
            waitUntil: 'networkidle',
            timeout: 120000
        }
    );

    console.log("Title:", await page.title());

    // ดู API ที่เว็บเรียก
    page.on('response', async response => {
        const url = response.url();

        if (
            url.includes('api') ||
            url.includes('json') ||
            url.includes('graphql')
        ) {
            console.log('API:', url);
        }
    });

    await page.reload({
        waitUntil: 'networkidle'
    });

    await browser.close();
})();
