Feature: The practice expand testing

  @regression @sc1
  Scenario: As a user with confidential data

    Given Open Application
    Then Login to Application with valid credentials
    Then Logout from Application


  @regression @sc2
  Scenario Outline: As a user login with given credentials

    Given Open Application
    Then Login to Application with credentials "<username>" and "<password>"
    Then Logout from Application

    Examples:
      | username | password             | message                        |
      | practice | SuperSecretPassword! | You logged into a secure area! |


