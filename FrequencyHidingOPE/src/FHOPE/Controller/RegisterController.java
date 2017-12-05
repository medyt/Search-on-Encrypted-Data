package FHOPE.Controller;

import java.net.URL;
import java.util.ResourceBundle;

import FHOPE.Model.Customer;
import FHOPE.Services.QueryService;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

public class RegisterController extends Controller implements Initializable {

    @FXML
    private TextField textUsername;

    @FXML
    private PasswordField textPassword;

    @FXML
    private TextField textEmail;

    @FXML
    private TextField textCardNumber;

    @FXML
    private void handleSubmitButton(ActionEvent event) throws Exception {
        String username = textUsername.getText();
        String password = textPassword.getText();
        String email = textEmail.getText();
        String cardNo = textCardNumber.getText();

        Customer newCustomer = new Customer();
        newCustomer.setUsername(username);
        newCustomer.setPassword(password);
        newCustomer.setEmail(email);
        newCustomer.setCardNumber(cardNo);

        QueryService service = new QueryService();
        service.insert(newCustomer);
        newCustomer.setUsername(username + "1");
        newCustomer.setPassword(password + "1");
        service.insert(newCustomer);
        newCustomer.setUsername(username + "2");
        newCustomer.setPassword(password + "2");
        service.insert(newCustomer);

        // do select
        service.select(username + "1", "768");
    }

    public RegisterController() throws Exception {
        super();
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {}
}
