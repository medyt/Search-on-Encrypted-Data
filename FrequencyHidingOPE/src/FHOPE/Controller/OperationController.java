package FHOPE.Controller;

import FHOPE.Model.Customer;
import FHOPE.Services.QueryService;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.TextInputDialog;

import java.util.Optional;

public class OperationController {

    public void infoBox(String infoMessage, String titleBar, String headerMessage)
    {
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.setTitle(titleBar);
        alert.setHeaderText(headerMessage);
        alert.setContentText(infoMessage);
        alert.showAndWait();
    }

    @FXML
    public void handleDebitButton(ActionEvent actionEvent) throws Exception {
        int amountOfMoney = inputBox("Debit","Debit Operation");

        Customer currentCustomer = LoginController.getCurrentCustomer();

        QueryService queryService = new QueryService();

        int currentBalance = queryService.getCurrentBalance(currentCustomer.getUsername());
        if(currentBalance < amountOfMoney)
        {
            infoBox("Insufficient funds","You don't have enough money ","");
        }

        int newBalance = currentBalance - amountOfMoney;

        queryService.updateBalance(newBalance,currentCustomer.getUsername());
    }

    @FXML
    public void handleCreditButton(ActionEvent actionEvent) throws Exception {
        int amountOfMoney = inputBox("Credit","Credit Operation");
        Customer currentCustomer = LoginController.getCurrentCustomer();

        QueryService queryService = new QueryService();

        int currentBalance = queryService.getCurrentBalance(currentCustomer.getUsername());
        int newBalance = currentBalance + amountOfMoney;

        queryService.updateBalance(newBalance,currentCustomer.getUsername());
    }

    @FXML
    public void handlechangePasswordButton(ActionEvent actionEvent) {
        int amountOfMoney = inputBox("Change Password","Change Password Operation");
    }

    private int inputBox(String titleBar, String headerMessage) {
        TextInputDialog dialog = new TextInputDialog(" ");
        dialog.setTitle(titleBar);
        dialog.setHeaderText(headerMessage);
        dialog.setContentText("Please enter the amount of money:");

        Optional<String> result = dialog.showAndWait();
        if (result.isPresent()){
            System.out.println("Your Amount of money" + result.get());
        }
        return Integer.parseInt(result.get());
    }
}
