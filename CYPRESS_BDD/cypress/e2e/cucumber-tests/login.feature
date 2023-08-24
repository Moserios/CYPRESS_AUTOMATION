Feature: Login to Application

    As a invalid user 
    I cannot login to application
    As a valid user 
    I want to login into Application

Scenario: Invalid Login
        Given I open login page
        And I want to wait 2 seconds
        When I enter username "Invalid_username"
        And I enter user password "invalid_password"
        And I click submit login button
        And I want to wait 60 seconds
        And I want to wait 2 seconds
        Then I should see an error
 
    Scenario: Valid Login
        Given I open login page
        And I want to wait 2 seconds
        When I enter username "moserturbo@gmail.com"
        And I enter user password "Moserio1249"
        And I click submit login button
        And I want to wait 60 seconds
        And I want to wait 2 seconds
        Then I should see homepage