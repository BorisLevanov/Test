// login.spec.js
var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');
var TasksPage = require('../pageobjects/tasks.page');
var Util = require('../pageobjects/util.page');



describe('A user should be able to log in.', function () {
    it('Given a regular user logs in with correct credentials, they should be navigated to the Tasks page.', function () {
        var randomPhrase = Util.generatePhrase(20);
        var randomNumber = Util.generateNumber(5);
        var todayDate = Util.generateDate();
        
        LoginPage.open();
        LoginPage.username.clearElement();
        LoginPage.username.setValue('user');
        LoginPage.password.clearElement();
        LoginPage.passwddord.setValue('123456');
        LoginPage.submit();

        TasksPage.signOutButton.waitForVisible(10000);
        TasksPage.dateField.setValue(todayDate);
        browser.debug();


        expect(LoginPage.pageBody.getText()).to.contain('My Tasks');
        TasksPage.signOutButton.click();


    });
});