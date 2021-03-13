// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class CadastrarFuncionarioTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void cadastrarFuncionario() {
    driver.get("http://localhost/Servicos/dashBoard.html/Funcionarios/dashBoardFuncionario.html");
    {
      List<WebElement> elements = driver.findElements(By.id("func"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.id("func")).click();
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".cadastrar"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.cssSelector(".cadastrar")).click();
    {
      List<WebElement> elements = driver.findElements(By.id("nome-campo"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.id("email-campo"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.id("funcao-campo"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.id("post-btn"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.id("post-btn")).click();
    driver.findElement(By.id("nome-campo")).sendKeys("Antonio M.");
    driver.findElement(By.id("email-campo")).click();
    driver.findElement(By.id("email-campo")).sendKeys("antonioM@email.com");
    driver.findElement(By.id("funcao-campo")).click();
    driver.findElement(By.id("funcao-campo")).sendKeys("Arquiteto");
    driver.findElement(By.id("post-btn")).click();
  }
}
