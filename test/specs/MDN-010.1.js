// login.spec.js
var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');
var TasksPage = require('../pageobjects/tasks.page');


describe('A user should be able to log in.', function () {
    it('Given a user logs in with incorrect credentials, a validation message should appear.', function () {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();

        // Wait for the validation to appear
        LoginPage.validationMessage.waitForVisible(10000);
        expect(LoginPage.pageBody.getText()).to.contain('Oops! Could not authenticate user');
    });

    it('Given a regular user logs in with correct credentials, they should be navigated to the Tasks page.', function () {
        LoginPage.open();
        LoginPage.username.clearElement();
        LoginPage.username.setValue('user');
        LoginPage.password.clearElement();
        LoginPage.password.setValue('123456');
        LoginPage.submit();

        TasksPage.signOutButton.waitForVisible(10000);
        expect(LoginPage.pageBody.getText()).to.contain('My Tasks');
        TasksPage.signOutButton.click();

    });

    it('Given a manager user logs in with correct credentials, they should be navigated to the Tasks page.', function () {
        LoginPage.open();
        LoginPage.username.clearElement();
        LoginPage.username.setValue('manager');
        LoginPage.password.clearElement();
        LoginPage.password.setValue('123456');
        LoginPage.submit();

        TasksPage.signOutButton.waitForVisible(10000);
        expect(LoginPage.pageBody.getText()).to.contain('My Tasks');
        TasksPage.signOutButton.click();
    });

    it('Given an admin user logs in with correct credentials, they should be navigated to the Tasks page.', function () {
        LoginPage.open();
        LoginPage.username.clearElement();
        LoginPage.username.setValue('user');
        LoginPage.password.clearElement();
        LoginPage.password.setValue('123456');
        LoginPage.submit();

        TasksPage.signOutButton.waitForVisible(10000);       
        expect(LoginPage.pageBody.getText()).to.contain('My Tasks');
        TasksPage.signOutButton.click();
    });
});