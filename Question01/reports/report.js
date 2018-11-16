$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/qa/cucumber/FacebookLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Application Testing",
  "description": "",
  "id": "facebook-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Facebook Login Test",
  "description": "",
  "id": "facebook-application-testing;facebook-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username or email address",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters user password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.verifyUserInFacebookPage()"
});
formatter.result({
  "duration": 5936971905,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginStepDef.enterUsername()"
});
formatter.result({
  "duration": 293702362,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginStepDef.enterPassword()"
});
formatter.result({
  "duration": 292794082,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginStepDef.clickOnLoginButton()"
});
formatter.result({
  "duration": 5099581628,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginStepDef.closeTheBrowser()"
});
formatter.result({
  "duration": 269400095,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Facebook Login Page Title Test",
  "description": "",
  "id": "facebook-application-testing;facebook-login-page-title-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user opens Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "get the title of Facebook login page and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLoginStepDef.verifyUserInFacebookPage()"
});
formatter.result({
  "duration": 3767137713,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginStepDef.verifyFacebookLoginPageTitle()"
});
formatter.result({
  "duration": 39308259,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginStepDef.closeTheBrowser()"
});
formatter.result({
  "duration": 202048862,
  "status": "passed"
});
});