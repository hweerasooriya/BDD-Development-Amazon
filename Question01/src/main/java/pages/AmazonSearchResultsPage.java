package pages;

import org.openqa.selenium.By;

public class AmazonSearchResultsPage {
    public static By searchResultsSummary =
            By.xpath("//span[contains(text(),'Showing most relevant results. See all results for ')]");

    public static By firstProductInSearchResultsPage =
            By.xpath("//li[@id='result_0']//h2");
}
