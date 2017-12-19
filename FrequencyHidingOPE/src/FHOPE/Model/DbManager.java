package FHOPE.Model;

import java.sql.*;

public class DbManager {
    private static Connection connection = null;

    public void connect() throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/appdb?" + "user=root&password=cacatdeurs");
    }

    public Connection getDbConnection() throws Exception {
        if (connection == null || connection.isClosed()) {
            connect();
        }
        return connection;
    }
}
