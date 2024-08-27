Feature: Sample Feature

Background:
    Given I am on the homepage

Scenario Outline: Verify search functionality
    When I search for "<query>"
    Then I should see search results

    Examples:
        | query       |
        | WebdriverIO |
        | Cucumber    |
