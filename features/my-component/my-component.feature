
  Feature: The Phrase "Hello World" shows up on the page when site first loads.
    In order to fulfill my desire to see the "Hello World" message
    As a user of the app
    I want to see the "Hello World" message when the app loads.


    Scenario: "Hello World" is displayed.
      Given the user is not currently at the site
      When the user lands on the site
      Then it should display the message "Hello World"
