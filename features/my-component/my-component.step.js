require('protractor');
var expect = require('chai').expect;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

var browser = require('protractor').browser;

chai.use(chaiAsPromised);

// var element = require('protractor').element;
// var angularMocks = require('angular-mocks');
// import protractor;
// var browser = require('protractor/lib/protractor.js');

// require('protractor');

module.exports = function () {

  // this.Given(/^a$/, function (callback) {
  //
  //   callback();
  // });
  // this.When(/^Fred logs into PayPal$/, function (callback) {
  //   // Write code here that turns the phrase above into concrete actions
  //   callback(null, 'pending');
  // });


  this.Given(/^the user is not currently at the site$/, {timeout: 60 * 1000}, function (callback) {



    // ==========================================
    //   Chai Stuff - Works!

    let a = 5;

    browser.get('/index.html');

    var el = element(by.css('.thing'));
    // console.log(el.isPresent());
    chai.assert.ok(el.isPresent());
    // chai.assert.ok(!el.isPresent());


    el.getText().then(function (text) {
      chai.assert.equal(text, 'hi there');

      callback();
    });

    // ==========================================


    // expect(true).to.equal(true);
    //
    // callback();






    //




  });

  this.When(/^the user lands on the site$/, function (callback) {


    callback();
  });

  this.Then(/^it should display the message "Hello World"$/, function (callback) {


    console.log('Hola!');
    // callback(null, 'pending');
    callback(false);

    // this.accountPage.isVisible().should.eventually.be
    //     .equal(true, 'Logout button was not visible')
    //     .notify(callback);
  });


};
