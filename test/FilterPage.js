var assertion = require('assert');
describe('webdriver.io api page', function() {
    it('should be able to filter for commands', function () {
        browser.url('/api.html');
        // filtering property commands
        $('.searchbar input').setValue('getT');
        // get all results that are displayed
        var results = $$('.commands.property a').filter(function (link) {
            return link.isVisible();
        });
        // assert number of results
        assertion.equal("Total results =" + results.length,"Total results =" + 3);
        // check out second result
        results[1].click();
        assertion.equal($('.doc h1').getText(),'GETTEXT');
        console.log('End of script: should be able to filter for commands');
    });

    it('should be able to click on get started button and redirect to guide.html', function () {
        browser.url('/');
        // Click Get Started button
        $('.button.getstarted').click();
        assertion.equal(browser.getTitle(),'WebdriverIO - Developer Guide');
        var results = $$('.apinav>h3').filter(function (link) {
            return link.isVisible();
        });
        assertion.equal("count of folders =" + results.length,"count of folders =" + 7);
        console.log('should be able to click on get started button and redirect to guide.html');
    });
});