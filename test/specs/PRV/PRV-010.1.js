/**
 * PRV - Privileges component
 */
// TODO: perform thorough check of functionality
var expect = require('chai').expect;
var LoginPage = require('../../pageobjects/login.page');
var TasksPage = require('../../pageobjects/tasks.page');


describe('A user can access parts of the website based on their privileges.', function () {

    it('Given a regular user logs in with correct credentials, they can only add/edit/remove their own tasks.', function () {
        LoginPage.open();
        LoginPage.username.clearElement();
        LoginPage.username.setValue('user');
        LoginPage.password.clearElement();
        LoginPage.password.setValue('123456');
        LoginPage.submit();

        TasksPage.signOutButton.waitForVisible(10000);
        expect(TasksPage.navBar.getText()).not.to.contain('Users');
        
        browser.url('/#/users');
        expect(TasksPage.pageBody.getText()).not.to.contain('Add/Edit Users');
        // TODO: find method to check current URL

        TasksPage.signOutButton.click();

    });

    it('Given a manager user logs in with correct credentials, they can only add/edit/remove their own tasks and other users.', function () {
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

    it('Given an admin user logs in with correct credentials, they can add/edit/remove their own tasks, other users\' tasks and other users.', function () {
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