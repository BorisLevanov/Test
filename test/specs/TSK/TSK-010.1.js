/**
 * LGN - Tasks component
 */
var ks = require('node-key-sender');
var expect = require('chai').expect;
var LoginPage = require('../../pageobjects/login.page');
var TasksPage = require('../../pageobjects/tasks.page');
var Util = require('../../pageobjects/util.page');



describe('A user can add tasks.', function () {

    it('Given a regular user logs in with correct credentials, they should be able to create a task.', function () {
        var randomPhrase = Util.generatePhrase(20);
        var randomNumber = Util.generateNumber(5);
        var todayDate = Util.generateDate();

        LoginPage.open();
        LoginPage.username.clearElement();
        LoginPage.username.setValue('user');
        LoginPage.password.clearElement();
        LoginPage.password.setValue('123456');
        LoginPage.submit();
        TasksPage.signOutButton.waitForVisible(10000);

        // Use keyboard to select a date using arrows, then populate the rest of the fields
        TasksPage.dateField.click();        
        ks.sendKey("up");
        browser.pause(500);
        ks.sendKey("right");
        browser.pause(500);        
        ks.sendKey("up");
        browser.pause(500);
        ks.sendKey("right");
        browser.pause(500);
        ks.sendKey("up");        
        browser.pause(500);

        // populate the rest of the fields, then save changes    
        TasksPage.notesField.setValue(randomPhrase);
        TasksPage.hoursField.setValue(randomNumber);
        TasksPage.saveTaskButton.click();

        // Refresh the page and wait for the tasks table to appear
        browser.refresh();
        TasksPage.tasksTable.waitForVisible(10000);
        
        expect(TasksPage.tasksTable.getText()).to.contain(randomPhrase);
        TasksPage.signOutButton.click();
    });   
});