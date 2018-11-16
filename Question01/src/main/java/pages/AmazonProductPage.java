package pages;

import org.openqa.selenium.By;

public class AmazonProductPage {
    public static By addToCartButton =
            By.xpath("//input[@id='add-to-cart-button']");

    public static By productTitleInProductPage =
            By.xpath("//span[@id='productTitle']");

    public static By productPriceInProductPage =
            By.xpath("//span[@id='priceblock_ourprice']");

    public static By quantityDropDown =
            By.xpath("//select[@id='quantity']");

    public static By addedToCartSuccessMessage =
            By.xpath("//h1[contains(text(),'Added to Cart')]");

    public static By productCountInCart =
            By.xpath("//span[@id='nav-cart-count']");
}
