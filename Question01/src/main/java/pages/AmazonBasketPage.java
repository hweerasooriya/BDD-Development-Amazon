package pages;

import org.openqa.selenium.By;

public class AmazonBasketPage {

    public static By productNameInBasketPage =
            By.xpath("//span[@class='a-size-medium sc-product-title a-text-bold']");

    public static By basket =
            By.xpath("//a[@href='/gp/cart/view.html/ref=nav_cart']");

    public static By productPriceInBasketPage =
            By.xpath("//span[@class='a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold']");
}
