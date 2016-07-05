var myStepDefinitionsWrapper = function () {

  this.Then(/^there should be a box containing detailed information about a user\.$/, function (callback) {
       callback.pending();
       });

  this.When(/^user does nothing$/, function (callback) {
      callback.pending();
      });

  this.Given(/^the user lands on the about\-us page$/, function (callback) {
      callback.pending();
      });
};
module.exports = myStepDefinitionsWrapper;
