/**
 * Created by jim on 7/2/16.
 */

module.exports = function () {

  this.Given(/^the user is not currently at the site$/, function (callback) {

      callback.pending();

  });

  this.When(/^the user lands on the site$/, function (callback) {


    callback.pending();
  });

  this.Then(/^it should display the message "Hello World"$/, function (callback) {

    callback.pending()

  });

};
