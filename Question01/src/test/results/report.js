$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Adding products to basket in amazon",
  "description": "",
  "id": "adding-products-to-basket-in-amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify the header of amazon",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-the-header-of-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see a search box in page header",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 2120775645,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_load_amazon()"
});
formatter.result({
  "duration": 3074290387,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.user_should_be_able_to_see_a_search_box_in_page_header()"
});
formatter.result({
  "duration": 211603600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDef.closeTheBrowser()"
});
formatter.result({
  "duration": 90343275,
  "status": "passed"
});
formatter.after({
  "duration": 43236,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verify the error message for incorrect username",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"\u003cusername\u003e\" for username",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on continue button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the incorrect email error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 20,
      "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;;1"
    },
    {
      "cells": [
        "singaporeUser1"
      ],
      "line": 21,
      "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;;2"
    },
    {
      "cells": [
        "singaporeUser2"
      ],
      "line": 22,
      "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;;3"
    },
    {
      "cells": [
        "singaporeUser3"
      ],
      "line": 23,
      "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;;4"
    },
    {
      "cells": [
        "singaporeUser4"
      ],
      "line": 24,
      "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "verify the error message for incorrect username",
  "description": "",
  "id": "adding-products-to-basket-in-amazon;verify-the-error-message-for-incorrect-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user load amazon",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"singaporeUser1\" for username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on continue button in login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the incorrect email error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_launch_the_chrome_browser()"
});
