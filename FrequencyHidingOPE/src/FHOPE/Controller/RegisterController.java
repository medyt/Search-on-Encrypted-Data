package FHOPE.Controller;

import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ResourceBundle;

import FHOPE.Model.Customer;
import FHOPE.Services.QueryService;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

import javafx.stage.Stage;

//register controller uses QueryService

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
    }

    public RegisterController() throws Exception {
        super();
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {}
}
