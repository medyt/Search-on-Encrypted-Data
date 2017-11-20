package FHOPE.Model;

import java.sql.*;
import java.util.List;

public class DbManager {
    private Connection connection = null;
    private Statement statement = null;
    private ResultSet resultSet = null;

    public void createDbConnection() throws Exception {
        Class.forName("com.mysql.jdbc.Driver");

        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/fhope","root","root");
        statement = connection.createStatement();
        resultSet = statement
                .executeQuery("select * from customers");
        writeResultSet(resultSet);
    }

    private void writeResultSet(ResultSet resultSet) throws SQLException {
        // ResultSet is initially before the first data set
        System.out.println("Conturile cu care se poate face login sunt: ");
        while (resultSet.next()) {
            // It is possible to get the columns via name
            // also possible to get the columns via the column number
            // which starts at 1
            // e.g. resultSet.getSTring(2);
            String lastname = resultSet.getString("lastname");
            System.out.println(lastname);
        }
        System.out.println("baza de date pe care se face login-ul se numeste customers");
    }

    private void close() {
        try {
            if (resultSet != null) {
                resultSet.close();
            }

            if (statement != null) {
                statement.close();
            }

            if (connection != null) {
                connection.close();
            }
        } catch (Exception e) {

        }
    }

    private List<Customer> customers;

    public void attach(Customer customer) {}

    public void notifyAllObservers(){
        for (Customer customer : customers) {
            customer.update();
        }
    }
}
