package FHOPE.Services;

import FHOPE.Controller.Controller;
import FHOPE.Model.Customer;
import FHOPE.Model.DataStructure.BinarySearchTree;
import FHOPE.Model.Query.AlterQuery;
import FHOPE.Model.Query.InsertQuery;
import FHOPE.Model.Query.Query;
import FHOPE.Model.Query.SelectQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class QueryService extends Controller {
    BinarySearchTree bst = null;

    private int minEncryptionBound = 1;
    private int maxEncryptionBound = 1024;

    public QueryService() throws Exception {
        super();
        bst = BinarySearchTree.getTreeInstance();
    }

    public String encryptSensitiveValue(String value) {
        return Integer.toString(bst.encrypt(value, minEncryptionBound, maxEncryptionBound));
    }

    public String decryptSensitiveValue(String cipher) throws Exception {
        return bst.decrypt(Integer.parseInt(cipher));
    }

    public void insert(Customer newCustomer) throws Exception {
        // encrypt password before inserting

        String password = newCustomer.getPassword();
        newCustomer.setPassword(encryptSensitiveValue(password));

        try (Connection connection = dbm.getDbConnection()){
            Query insertQuery = new InsertQuery();
            String queryStmt = insertQuery.createQuery();

            PreparedStatement preparedStmt = connection.prepareStatement(queryStmt);
            preparedStmt.setString (1, newCustomer.getUsername());
            preparedStmt.setString (2, newCustomer.getEmail());
            preparedStmt.setString (3, newCustomer.getBalance());
            preparedStmt.setString (4, newCustomer.getCardNumber()) ;
            preparedStmt.setString (5, newCustomer.getPassword());

            boolean rs = insertQuery.execute(preparedStmt);
        }
    }

    public String select(String usernameValue) throws Exception {
        try (Connection connection = dbm.getDbConnection()){
            Query selectQuery = new SelectQuery();
            String queryStmt = selectQuery.createQuery();

            PreparedStatement preparedStmt = connection.prepareStatement(queryStmt);
            preparedStmt.setString (1, usernameValue);

            ResultSet rs = selectQuery.executeQuery(preparedStmt);
            String decryptedPassword = "";
            while (rs.next()){
                String username = rs.getString(1);
                String email = rs.getString(2);
                String cardNumber = rs.getString(4);
                String passwordCipher = rs.getString(5);
                decryptedPassword = decryptSensitiveValue(passwordCipher);
            }
            return decryptedPassword;
        }
    }

    public int getCurrentBalance(String usernameValue) throws Exception {
        Connection connection = dbm.getDbConnection();
        Query selectQuery = new SelectQuery();
        String queryStmt = selectQuery.createQuery();

        PreparedStatement preparedStmt = connection.prepareStatement(queryStmt);
        preparedStmt.setString (1, usernameValue);

        ResultSet rs = selectQuery.executeQuery(preparedStmt);

        int currentBalance = -1;
        String balanceStr = "";

        while (rs.next()) {
            balanceStr = rs.getString(3);
        }

        currentBalance = Integer.parseInt(balanceStr);
        return currentBalance;
    }

    public void updateBalance(int newValue,String userName) throws Exception {
            Connection connection = dbm.getDbConnection();
            Query alterQuery = new AlterQuery();
            String queryStmt = alterQuery.createQuery();

            PreparedStatement preparedStmt = connection.prepareStatement(queryStmt);
            preparedStmt.setString (1, String.valueOf(newValue));
            preparedStmt.setString(2,userName);

            preparedStmt.executeUpdate();
    }

    public void updatePassword(String newPassword,Customer currentCustomer) throws Exception {

        Connection connection = dbm.getDbConnection();
        Query alterQuery = new AlterQuery();
        String queryStmt = alterQuery.createQueryPass();

        PreparedStatement preparedStmt = connection.prepareStatement(queryStmt);
        preparedStmt.setString (1, newPassword);
        preparedStmt.setString(2,currentCustomer.getUsername());
        preparedStmt.executeUpdate();
    }
}
