package FHOPE.Controller;

import FHOPE.Model.DataStructure.BinarySearchTree;
import FHOPE.Model.Query.InsertQuery;
import FHOPE.Model.Query.Query;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class QueryController extends Controller {
    BinarySearchTree bst = null;

    private int minEncryptionBound = 1;
    private int maxEncryptionBound = 1024;

    public QueryController() throws Exception {
        super();
        bst = new BinarySearchTree();
    }

    public String encryptSensitiveValue(String value) {
        return Integer.toString(bst.encrypt(value, minEncryptionBound, maxEncryptionBound));
    }

    public void insert(String [] args) throws Exception {
        // encrypt password before inserting
        String password = args[4];
        args[4] = encryptSensitiveValue(password);

        try (Connection connection = dbm.getDbConnection()){
            Query insertQuery = new InsertQuery();
            String queryStmt = insertQuery.createQuery(args);

            PreparedStatement preparedStmt = connection.prepareStatement(queryStmt);
            preparedStmt.setString (1, args[0]);
            preparedStmt.setString (2, args[1]);
            preparedStmt.setString (3, args[2]);
            preparedStmt.setString (4, args[3]) ;
            preparedStmt.setString (5, args[4]);

            insertQuery.executeQuery(preparedStmt);
        }
    }
}
