// login.spec.js
var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

describe('login form', function () {
    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();

        // Wait for the validion
        browser.waitForVisible('[role="alert"]');

        expect(LoginPage.pageBody.getText()).to.contain('Oops! Could not authenticate user');
    });

    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('admin');        
        LoginPage.password.setValue('123456');
        LoginPage.submit();

        expect(LoginPage.pageBody.getText()).to.contain('You logged into a secure area!');
    });
});