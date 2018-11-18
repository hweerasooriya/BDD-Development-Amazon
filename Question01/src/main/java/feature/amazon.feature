Feature: Adding products to basket in amazon
      As a customer of the Amazon Online site
      I want to login my customer profile using my credentials
      In order to login with credentials
 Background: User navigates to Amazon home page

  Scenario: verify the header of amazon
    Given user launch the chrome browser
    When user load amazon
    Then user should be able to see a search box in page header
    And user close the browser

  Scenario: verify the error message for incorrect email and password
    Given user launch the chrome browser
    When user load amazon
    When user clicks on sign in link
    When user enters invalid sign in details
        |email-address                     |password|
        |invalidtestautomationuser1@yomai |password|
    When user clicks on "Sign In" button in login page
    Then user should be able to see the incorrect validation error message
    And user close the browser


    Scenario: verify successful login and the header of home page
    Given user launch the chrome browser
    When user load amazon
    When user clicks on sign in link
    When user enters "qa.testharshani@gmail.com" for username
    When user enters "qwEr@1234" for password
    When user clicks on "SignIn" button in login page
    Then user should be able to see username "Harshani" in home page header
    And user close the browser

  Scenario: verify product page navigation of iPhone X 64GB product
    Given user launch the chrome browser
    When user load amazon
    When user clicks on sign in link
    When user enters "qa.testharshani@gmail.com" for username
    When user enters "qwEr@1234" for password
    When user clicks on "SignIn" button in login page
    Then user should be able to see username "Harshani" in home page header
    When user search "iPhone X 64gb" product
    Then user should be able to see most relevant results of "iPhone X 64gb"
    When user clicks on first product
    Then user should be navigated to product page
    And user close the browser

  Scenario: add product to cart and validate product is added into basket on product page
    Given user launch the chrome browser
    When user load amazon
    When user clicks on sign in link
    When user enters "qa.testharshani@gmail.com" for username
    When user enters "qwEr@1234" for password
    When user clicks on "SignIn" button in login page
    Then user should be able to see username "Harshani" in home page header
    When user search "iPhone X 64gb" product
    When user clicks on first product
    When user select quantity as "1" and add to cart
    Then user should be able to see added to cart message
    Then user should be able to see the product count in basket
    And user close the browser

  Scenario: validate product price and name on basket page
    Given user launch the chrome browser
    When user load amazon
    When user clicks on sign in link
    When user enters "qa.testharshani@gmail.com" for username
    When user enters "qwEr@1234" for password            
    When user clicks on "SignIn" button in login page    
    Then user should be able to see username "Harshani" in home page header
    When user clicks on basket
    Then user should be able to see the exact product name and exact price in basket
    And user close the browser