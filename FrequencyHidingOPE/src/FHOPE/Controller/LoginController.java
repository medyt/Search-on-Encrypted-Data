package FHOPE.Controller;

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

import java.net.URL;
import java.util.ResourceBundle;


public class LoginController implements Initializable {

    @FXML
    private TextField textUsername;

    @FXML
    private PasswordField textPassword;

    public LoginController() throws Exception {
        super();
    }

    private static Customer loggedInCustomer;

    public static Customer getCurrentCustomer() {
        return loggedInCustomer;
    }

    private boolean validateUserInput(String username, String password) {
        if (username.length() == 0 || password.length() == 0) {
            infoBox("You did not enter username or password", "Failed", null);
            return false;
        }
        return true;
    }

    @FXML
    private void handleLoginButtonAction(ActionEvent event) throws Exception {
        String username = textUsername.getText();
        String password = textPassword.getText();

        if (!validateUserInput(username, password)) return;

        loggedInCustomer = new Customer();
        loggedInCustomer.setUsername(username);
        loggedInCustomer.setPassword(password);

        QueryService service = new QueryService();
        String passwordPlain = service.select(username);

        if (passwordPlain.equals(password)) {
            infoBox("Login Successful", "Success", null);
            Node source = (Node) event.getSource();
            Stage stage = (Stage) source.getScene().getWindow();
            stage.close();
            Scene scene = new Scene(FXMLLoader.load(getClass().getResource("../Resources/FXMLOperations.fxml")));
            stage.setScene(scene);
            stage.show();
            return;
        } else {
            infoBox("Enter Correct Name and Password", "Failed", null);
            return;
        }
    }

    public void infoBox(String infoMessage, String titleBar, String headerMessage) {
        Alert alert = new Alert(AlertType.INFORMATION);
        alert.setTitle(titleBar);
        alert.setHeaderText(headerMessage);
        alert.setContentText(infoMessage);
        alert.showAndWait();
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {
    }
}
