import cucumber.api.*;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/feature/amazon.feature",
        glue = {"stepDef"},
        format = {"pretty", "html:src/test/results", "json:src/test/results/amazon-test-results.json"})

public class AmazonTestRunner {
}