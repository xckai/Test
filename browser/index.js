const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/shadow.html', { waitUntil: 'networkidle2' });
  // hacky defensive move but I don't know a better way:
  // wait a bit so that the browser finishes executing JavaScript
  await page.waitFor(2 * 1000);
  const client = await page.target().createCDPSession();

  var result = await client.send('DOMSnapshot.getSnapshot', { computedStyleWhitelist: [] });

  //const html = await page.screenshot();
  fs.writeFileSync('result' + new Date().getSeconds() + '.json', JSON.stringify(result));
  await browser.close();
}

run();
