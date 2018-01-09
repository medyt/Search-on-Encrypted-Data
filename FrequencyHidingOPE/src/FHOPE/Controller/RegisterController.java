package FHOPE.Controller;

import FHOPE.Model.Customer;
import FHOPE.Services.QueryService;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

import java.net.URL;
import java.util.ResourceBundle;

public class RegisterController implements Initializable {

    @FXML
    private TextField textUsername;

    @FXML
    private PasswordField textPassword;

    @FXML
    private TextField textEmail;

    @FXML
    private TextField textCardNumber;

    private Customer buildCustomerObject(String username, String password, String email, String cardNo) {
        Customer newCustomer = new Customer();
        newCustomer.setUsername(username);
        newCustomer.setPassword(password);
        newCustomer.setEmail(email);
        newCustomer.setCardNumber(cardNo);
        return newCustomer;
    }

    @FXML
    private void handleSubmitButton(ActionEvent actionEvent) throws Exception {
        String username = textUsername.getText();
        String password = textPassword.getText();
        String email = textEmail.getText();
        String cardNo = textCardNumber.getText();

        Customer newCustomer = this.buildCustomerObject(username, password, email, cardNo);
        QueryService service = new QueryService();
        service.insert(newCustomer);

        Node source = (Node) actionEvent.getSource();
        Stage stage = (Stage) source.getScene().getWindow();
        stage.close();
        Scene scene = new Scene(FXMLLoader.load(getClass().getResource("../Resources/FXMLMenu.fxml")));
        stage.setScene(scene);
        stage.show();
    }

    public RegisterController() throws Exception {
        super();
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {
    }
}
