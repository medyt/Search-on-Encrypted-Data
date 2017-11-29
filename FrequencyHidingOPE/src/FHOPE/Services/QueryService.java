package FHOPE.Services;

import FHOPE.Controller.Controller;
import FHOPE.Model.Customer;
import FHOPE.Model.DataStructure.BinarySearchTree;
import FHOPE.Model.Query.InsertQuery;
import FHOPE.Model.Query.Query;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class QueryService extends Controller {
    BinarySearchTree bst = null;

    private int minEncryptionBound = 1;
    private int maxEncryptionBound = 1024;

    public QueryService() throws Exception {
        super();
        bst = new BinarySearchTree();
    }

    public String encryptSensitiveValue(String value) {
        return Integer.toString(bst.encrypt(value, minEncryptionBound, maxEncryptionBound));
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

            insertQuery.executeQuery(preparedStmt);
        }
    }
}
