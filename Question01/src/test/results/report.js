$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Adding products to basket in amazon",
  "description": "    As a customer of the Amazon Online site\n    I want to login my customer profile using my credentials\n    In order to login with credentials",
  "id": "adding-products-to-basket-in-amazon",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "verify the header of amazon",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-the-header-of-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be able to see a search box in page header",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 4103107100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 10367143148,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_able_to_see_a_search_box_in_page_header()"
});
formatter.result({
  "duration": 40015634,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "duration": 734710120,
  "status": "passed"
});
formatter.after({
  "duration": 31858,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "verify the error message for incorrect email and password",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-email-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters invalid sign in details",
  "rows": [
    {
      "cells": [
        "email-address",
        "password"
      ],
      "line": 18
    },
    {
      "cells": [
        "invalidtestautomationuser1@yomai",
        "password"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks on \"Sign In\" button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user should be able to see the incorrect validation error message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 3155843084,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 8577489186,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 1850256540,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_enters_invalid_sign_in_details(DataTable)"
});
formatter.result({
  "duration": 276283086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 16
    }
  ],
  "location": "AmazonStepDef.user_clicks_on_button_in_login_page(String)"
});
formatter.result({
  "duration": 1493517229,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_able_to_see_the_incorrect_validation_error_message()"
});
formatter.result({
  "duration": 34431421,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "duration": 733826635,
  "status": "passed"
});
formatter.after({
  "duration": 11947,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "verify successful login and the header of home page",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-successful-login-and-the-header-of-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user enters \"qa.testharshani@gmail.com\" for username",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user enters \"qwEr@1234\" for password",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user clicks on \"SignIn\" button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user should be able to see username \"Harshani\" in home page header",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 3192767945,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 8827470840,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 2452821204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa.testharshani@gmail.com",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_username(String)"
});
formatter.result({
  "duration": 148479958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwEr@1234",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_password(String)"
});
formatter.result({
  "duration": 79562501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    }
  ],
  "location": "AmazonStepDef.user_clicks_on_button_in_login_page(String)"
});
formatter.result({
  "duration": 3009012905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harshani",
      "offset": 37
    }
  ],
  "location": "AmazonStepDef.user_should_be_able_to_see_username_in_home_page_header(String)"
});
formatter.result({
  "duration": 55474615,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "duration": 754155306,
  "status": "passed"
});
formatter.after({
  "duration": 41529,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "verify product page navigation of iPhone X 64GB product",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-product-page-navigation-of-iphone-x-64gb-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user enters \"qa.testharshani@gmail.com\" for username",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user enters \"qwEr@1234\" for password",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user clicks on \"SignIn\" button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user should be able to see username \"Harshani\" in home page header",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user search \"iPhone X 64gb\" product",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user should be able to see most relevant results of \"iPhone X 64gb\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user clicks on first product",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user should be navigated to product page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 3164225091,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 13308338828,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 3087936544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa.testharshani@gmail.com",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_username(String)"
});
formatter.result({
  "duration": 148298482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwEr@1234",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_password(String)"
});
formatter.result({
  "duration": 83191443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    }
  ],
  "location": "AmazonStepDef.user_clicks_on_button_in_login_page(String)"
});
formatter.result({
  "duration": 4079834431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harshani",
      "offset": 37
    }
  ],
  "location": "AmazonStepDef.user_should_be_able_to_see_username_in_home_page_header(String)"
});
formatter.result({
  "duration": 45562298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X 64gb",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_search_product(String)"
});
formatter.result({
  "duration": 9265000316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X 64gb",
      "offset": 53
    }
  ],
  "location": "AmazonStepDef.user_should_be_able_to_see_and_related_products(String)"
});
formatter.result({
  "duration": 41304735,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_first_product()"
});
formatter.result({
  "duration": 6239998794,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_navigated_to_product_page()"
});
formatter.result({
  "duration": 77429738,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027add-to-cart-button\u0027]\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-1MTOD4I\u0027, ip: \u002710.81.130.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64953}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 3fc9bcd3c17d239dac19abd4b42fae4f\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027add-to-cart-button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat stepDef.AmazonStepDef.user_should_be_navigated_to_product_page(AmazonStepDef.java:115)\r\n\tat ✽.Then user should be navigated to product page(src/main/java/feature/amazon.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 758489669,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 49,
  "name": "add product to cart and validate product is added into basket on product page",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;add-product-to-cart-and-validate-product-is-added-into-basket-on-product-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "user enters \"qa.testharshani@gmail.com\" for username",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters \"qwEr@1234\" for password",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "user clicks on \"SignIn\" button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user should be able to see username \"Harshani\" in home page header",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user search \"iPhone X 64gb\" product",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "user clicks on first product",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user select quantity as \"1\" and add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user should be able to see added to cart message",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user should be able to see the product count in basket",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 3167151454,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 8719594747,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 1915020540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa.testharshani@gmail.com",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_username(String)"
});
formatter.result({
  "duration": 153658552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwEr@1234",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_password(String)"
});
formatter.result({
  "duration": 87813095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    }
  ],
  "location": "AmazonStepDef.user_clicks_on_button_in_login_page(String)"
});
formatter.result({
  "duration": 2986158937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harshani",
      "offset": 37
    }
  ],
  "location": "AmazonStepDef.user_should_be_able_to_see_username_in_home_page_header(String)"
});
formatter.result({
  "duration": 41246139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X 64gb",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_search_product(String)"
});
formatter.result({
  "duration": 7839807192,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_first_product()"
});
formatter.result({
  "duration": 9105465144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AmazonStepDef.user_select_quantity(String)"
});
formatter.result({
  "duration": 187469316,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@id\u003d\u0027priceblock_ourprice\u0027]\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-1MTOD4I\u0027, ip: \u002710.81.130.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65089}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: e807155a3f7e226b3cf26ec51a822b6c\n*** Element info: {Using\u003dxpath, value\u003d//span[@id\u003d\u0027priceblock_ourprice\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat stepDef.AmazonStepDef.captureProductDetails(AmazonStepDef.java:168)\r\n\tat stepDef.AmazonStepDef.user_select_quantity(AmazonStepDef.java:129)\r\n\tat ✽.When user select quantity as \"1\" and add to cart(src/main/java/feature/amazon.feature:59)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_able_to_add_the_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_able_to_see_the_product_count_in_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 766006964,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 64,
  "name": "validate product price and name on basket page",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;validate-product-price-and-name-on-basket-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "user enters \"qa.testharshani@gmail.com\" for username",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "user enters \"qwEr@1234\" for password",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user clicks on \"SignIn\" button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user should be able to see username \"Harshani\" in home page header",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "user clicks on basket",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "user should be able to see the exact product name and exact price in basket",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 3182984196,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 10829397666,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 2416218903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa.testharshani@gmail.com",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_username(String)"
});
formatter.result({
  "duration": 155754907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwEr@1234",
      "offset": 13
    }
  ],
  "location": "AmazonStepDef.user_enters_for_password(String)"
});
formatter.result({
  "duration": 78748422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    }
  ],
  "location": "AmazonStepDef.user_clicks_on_button_in_login_page(String)"
});
formatter.result({
  "duration": 3434572392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harshani",
      "offset": 37
    }
  ],
  "location": "AmazonStepDef.user_should_be_able_to_see_username_in_home_page_header(String)"
});
formatter.result({
  "duration": 42385624,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_basket()"
});
formatter.result({
  "duration": 6800441230,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_able_to_see_the_exact_product_name_and_exact_price_in_basket()"
});
formatter.result({
  "duration": 270791,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDef.AmazonStepDef.user_should_be_able_to_see_the_exact_product_name_and_exact_price_in_basket(AmazonStepDef.java:153)\r\n\tat ✽.Then user should be able to see the exact product name and exact price in basket(src/main/java/feature/amazon.feature:73)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 768977701,
  "status": "passed"
});
});