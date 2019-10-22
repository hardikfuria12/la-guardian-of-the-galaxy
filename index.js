const puppeteer = require('puppeteer');

(async ()=>{
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.laguardiaairport.com/to-from-airport/parking');
await page.waitForSelector('div.terminal-percentage');
console.log("Its showing");
let data = await page.evaluate(()=>{
  let terminalAParking=document.querySelector('div[class="terminal-percentage"]>span').innerText;
  return terminalAParking
});
console.log(data);
await browser.close();
})();
/*

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.laguardiaairport.com/to-from-airport/parking');
await page.waitForSelector('div.terminal-percentage');
let data = await page.evaluate(()=>{
  let terminalAParking=document.querySelector('div[class="terminal-percentage"]>span').innerText;
  return terminalAParking
});
console.log(data);
await browser.close();
*/


/*let data = await page.evaluate(()=>{
  const terminalAParking=document.querySelector('div[class="terminal-percentage"]');
  const styke = terminalAParking.style.width;
  console.log(styke);
  // var numItems =document.getElementsByClassName('terminal-percentage').length;
  // console.log(JSON.stringyfy(numItems));
  // return terminalAParking
});
console.log(data);
await browser.close();*/
