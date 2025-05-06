import {test} from '@playwright/test';

test('Using browser', async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.amazon.com");
    const title=await page.title();
   await  console.log("title=> ", title);

});

test('Launching url',async({page})=>{
    await page.goto("https://www.google.com");
    const title=await page.title();
    await console.log('page title',title);
});