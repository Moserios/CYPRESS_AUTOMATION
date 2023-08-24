Feature: Fill the feedback form

    As a user I want to fill and submit feedback form

    @focus
    Scenario: Fill and send feedback form
        Given When I open the feedback page
        And I want to wait 2 seconds
        When I fill the name field "Sergey"
        And I fill the email field "moserios@email.com"
        And I fill the subject field "Test subject"
        And I fill the comment field "Comment in test message"
        And I click send button
        And I want to wait 2 seconds
        Then I see confirmation message