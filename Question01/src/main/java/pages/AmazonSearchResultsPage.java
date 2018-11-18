package pages;

import org.openqa.selenium.By;

public class AmazonSearchResultsPage {
    public static By searchResultsSummary =
            By.id("quartsPagelet");

    public static By firstProductInSearchResultsPage =
            By.xpath("//li[@id='result_0']//h2");
}
