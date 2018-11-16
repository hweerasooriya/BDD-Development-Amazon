package pages;

import org.openqa.selenium.By;

public class AmazonLoginPage {
    public static By usernameTextBox =
            By.xpath("//input[@id='ap_email']");

    public static By continueButton =
            By.xpath("//input[@id='continue']");

    public static By signInButton =
            By.xpath("//input[@id='signInSubmit']");

    public static By usernameErrorMessage =
            By.xpath("//span[contains(text(),'We cannot find an account with that email address')]");

    public static By passwordTextBox =
            By.xpath("//input[@id='ap_password']");

    public static By passwordErrorMessage =
            By.xpath("//span[contains(text(),'Your password is incorrect')]");
}