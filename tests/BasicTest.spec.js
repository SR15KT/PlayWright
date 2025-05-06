
import {test} from '@playwright/test';

test('Launching url',async({page})=>{
    await page.goto("https://www.google.com");
    const title= await page.title();
    console.log('page title',title);
});