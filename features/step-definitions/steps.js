
import { Given, When, Then } from '@cucumber/cucumber';


Given('I am on the homepage', async function () {
    await browser.url('https://www.example.com');
});

When('I search for {string}', async function (query) {
    const searchBox = await browser.$('#search');
    await searchBox.setValue(query);
    await browser.keys('Enter');
});

Then('I should see search results', async function () {
    const results = await browser.$('.results');
    await results.waitForExist();
    expect(await results.isDisplayed()).toBe(true);
});



