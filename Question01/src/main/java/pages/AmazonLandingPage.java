package pages;

import org.openqa.selenium.By;

public class AmazonLandingPage {
    public static By searchBoxInHeader =
            By.xpath("//input[@id='twotabsearchtextbox']");

    public static By searchIcon =
            By.xpath("//input[@value='Go']");

    public static By signInLink =
            By.xpath("//span[contains(text(),'Hello. Sign in')]");
}
