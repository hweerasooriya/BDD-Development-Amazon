package stepDef;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dataProvider.ConfigFileReader;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.*;

import java.util.List;
import java.util.Map;

public class AmazonStepDef {

        ConfigFileReader configFileReader;
        private WebDriver driver = null;
        private String firstProductTitleInSearchResultsPage;
        private String productName;
        private String productPrice;

        @Given("^user launch the chrome browser$")
        public void user_launch_the_chrome_browser() {
            configFileReader = new ConfigFileReader();
            if (configFileReader.getBrowser().equals("chrome")) {
                System.setProperty("webdriver.chrome.driver", configFileReader.getDriverPath());
                driver = new ChromeDriver();
                driver.manage().window().maximize();
            }
        }

        @When("^user load amazon$")
        public void user_load_amazon() {
            configFileReader = new ConfigFileReader();
            driver.get(configFileReader.getUrl());
        }

        @Then("^user should be able to see a search box in page header$")
        public void user_should_be_able_to_see_a_search_box_in_page_header() {
            Assert.assertTrue("Amazon.com was not be loaded",
                    driver.findElement(AmazonLandingPage.searchBoxInHeader).isDisplayed());
        }

        @When("^user clicks on sign in link$")
        public void user_clicks_on_sign_in_link() {

            driver.findElement(AmazonLandingPage.signInLink).click();
        }

        @When("^user enters invalid sign in details$")
         public void user_enters_invalid_sign_in_details(DataTable invalidcrentials) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
            List<Map<String, String>> signin = invalidcrentials.asMaps(String.class, String.class);
            driver.findElement(AmazonLoginPage.usernameTextBox).sendKeys(signin.get(0).get("email-address"));
            driver.findElement(AmazonLoginPage.passwordTextBox).sendKeys(signin.get(0).get("password"));
        }

        @When("^user clicks on \"([^\"]*)\" button in login page$")
         public void user_clicks_on_button_in_login_page(String signInBtn) throws Throwable {
            driver.findElement(AmazonLoginPage.continueButton).click();
         }

        @Then("^user should be able to see the incorrect validation error message$")
        public void user_should_be_able_to_see_the_incorrect_validation_error_message() throws Throwable {
            Assert.assertTrue("Error message for incorrect email was not be displayed",
                    driver.findElement(AmazonLoginPage.usernameErrorMessage).isDisplayed());
        }
        @When("^user enters \"([^\"]*)\" for username$")
        public void user_enters_for_username(String username) throws Throwable {
            driver.findElement(AmazonLoginPage.usernameTextBox).sendKeys(username);
        }

        @When("^user enters \"([^\"]*)\" for password$")
        public void user_enters_for_password(String password) throws Throwable {
            driver.findElement(AmazonLoginPage.passwordTextBox).sendKeys(password);
        }

        @Then("^user should be able to see username \"([^\"]*)\" in home page header$")
        public void user_should_be_able_to_see_username_in_home_page_header(String username) {
            Assert.assertEquals("Unsuccessful login",
                    "Hello, " + username,
                    driver.findElement(AmazonHomePage.usernameInHomePage).getText());
        }

        @When("^user search \"([^\"]*)\" product$")
        public void user_search_product(String product) {
            driver.findElement(AmazonLandingPage.searchBoxInHeader).sendKeys(product);
            driver.findElement(AmazonLandingPage.searchIcon).click();
        }

        @Then("^user should be able to see most relevant results of \"([^\"]*)\"$")
        public void user_should_be_able_to_see_and_related_products(String product) {
            Assert.assertEquals("Search results of " + product + " not be displayed",
                    "Showing selected results. See all results for "+product+".",
                     driver.findElement(AmazonSearchResultsPage.searchResultsSummary).getText());
        }

        @When("^user clicks on first product$")
        public void user_clicks_on_first_product() {
            firstProductTitleInSearchResultsPage = driver.findElement(AmazonSearchResultsPage.firstProductInSearchResultsPage).getText();
            driver.findElement(AmazonSearchResultsPage.firstProductInSearchResultsPage).click();
        }

        @Then("^user should be navigated to product page$")
        public void user_should_be_navigated_to_product_page() {
            Assert.assertTrue("Not navigated to product page",
                    driver.findElement(AmazonProductPage.addToCartButton).isDisplayed());
            Assert.assertEquals("Invalid product page", firstProductTitleInSearchResultsPage,
                    driver.findElement(AmazonProductPage.productTitleInProductPage).getText());
                    //driver.findElement(AmazonProductPage.productTitleInProductPage).getText());
        }

        @Then("^user should be able to see added to cart message$")
        public void user_should_be_able_to_add_the_product_to_cart() {
            Assert.assertTrue("Added to cart success message was not be displayed",
                    driver.findElement(AmazonProductPage.addedToCartSuccessMessage).isDisplayed());
        }

        @When("^user select quantity as \"([^\"]*)\" and add to cart$")
        public void user_select_quantity(String quantity) {
            captureProductDetails();
            List<WebElement> quantities = getQuantities();
            for (WebElement qty : quantities) {
                if (qty.getAttribute("value").equals(quantity)) {
                    qty.click();
                    break;
                }
            }
            driver.findElement(AmazonProductPage.addToCartButton).click();
        }

        @Then("^user should be able to see the product count in basket$")
        public void user_should_be_able_to_see_the_product_count_in_basket() {
            Assert.assertEquals("Invalid product count", "1",
                    driver.findElement(AmazonProductPage.productCountInCart).getText());
        }

        @When("^user clicks on basket$")
        public void user_clicks_on_basket() {
            driver.findElement(AmazonBasketPage.basket).click();
        }

        @Then("^user should be able to see the exact product name and exact price in basket$")
        public void user_should_be_able_to_see_the_exact_product_name_and_exact_price_in_basket() {
            Assert.assertEquals("Invalid product name", productName,
                    driver.findElement(AmazonBasketPage.productNameInBasketPage).getText());

            Assert.assertEquals("Invalid product price", productPrice,
                    driver.findElement(AmazonBasketPage.productPriceInBasketPage).getText());
        }

        @After
        @And("^user close the browser$")
        public void closeTheBrowser() {
            driver.quit();
        }

        private void captureProductDetails() {
             productName = driver.findElement(AmazonProductPage.productTitleInProductPage).getText();
             productPrice = driver.findElement(AmazonProductPage.productPriceInProductPage).getText();

        }

        private List<WebElement> getQuantities() {
            return driver.findElements(AmazonProductPage.quantityDropDown);
        }



}
