// util.page.js
var Page = require('./page');

var Util = Object.create(Page, {
    /**
     * define or overwrite page methods
     */
    generatePhrase: {
        value: function (length) {
            var result = '',
                i,
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
            for (i = length; i > 0; i -= 1) {
                result += chars[Math.round(Math.random() * (chars.length - 1))];
            }
            return result;
        }
    },

    generateNumber: {
        value: function (maxValue) {
     
            return Math.floor(Math.random() * maxValue);
        }
    },

    generateDate: {
        value: function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            
            if(dd<10) {
                dd = '0'+dd;
            } 
            
            if(mm<10) {
                mm = '0'+mm;
            } 
            
            today = dd + '/' + mm + '/' + yyyy;
            console.log("====="+today);
            return today;
        }
    }
});

module.exports = Util;