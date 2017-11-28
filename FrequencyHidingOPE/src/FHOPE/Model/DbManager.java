package FHOPE.Model;

import java.sql.*;

public class DbManager {
    private static Connection connection = null;
    private Statement statement = null;
    private ResultSet resultSet = null;

    private static String fullInfoQuery = "SELECT * FROM customers WHERE card_number = ? AND id = ?;";
    private static String updateBalance = "UPDATE customers SET balance = ? WHERE balance = ?;";

    public static void updateBalance(int newBalance,int oldbalance) throws SQLException {
        PreparedStatement statement = connection.prepareStatement(updateBalance);
        statement.setInt(1,newBalance);
        statement.setInt(2,oldbalance);
        statement.executeQuery();
    }

    public Customer getCustomer(Login loginData) throws SQLException {
        PreparedStatement statement = connection.prepareStatement(fullInfoQuery);
        statement.setString(1,loginData.getCardNo());
        statement.setString(2,loginData.getId());
        ResultSet resultSet = statement.executeQuery();

        Customer customer = new Customer();

        while (resultSet.next())
        {
            customer.setCardNumber(resultSet.getString("card_number"));
            customer.setName(resultSet.getString("name"));
            customer.setBalance(resultSet.getInt("balance"));
            customer.setId(resultSet.getString("id"));
            customer.setPin(resultSet.getString("pin_code"));
        }

        return customer;
    }

    public Connection createDbConnection() throws Exception {
      Class.forName("com.mysql.jdbc.Driver");

      connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/appdb?" + "user=root&password=cacatdeurs");

      return connection;
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
}
