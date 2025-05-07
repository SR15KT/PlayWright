const {test}= require('@playwright/test');

test("Automate Amazon", async({page})=>{
    await page.goto("https://www.amazon.com");
    const search=await page.locator("#twotabsearchtextbox");
    await search.fill("Macbook air m1 2020");
    //await page.waitForTimeout(8000);
   await page.waitForSelector('#sac-suggestion-row-1',{timeout:8000});
    await page.locator("#sac-suggestion-row-1").click();
    
});