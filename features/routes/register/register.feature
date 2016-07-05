
Feature: About us page shows the members of ng-nj
  In order to fulfill my desire to see the "Hello World" message
  As a user of the app
  I want to see the "Hello World" message when the app loads.

  Scenario: User sees more info for a default member
    Given the user lands on the about-us page
    When user does nothing
    Then there should be a box containing detailed information about a user.


  Scenario: User clicks a member from the member list
    Given the user lands on the about-us page
    When user clicks on the user "Bob"
    Then The box should update to display bob's information
