package FHOPE.Model;

import java.sql.*;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DbManager {
    private static DbManager dbManager;
    private ComboPooledDataSource comboPooledDataSource;

    private DbManager() {
        try {
            comboPooledDataSource = new ComboPooledDataSource();
            comboPooledDataSource.setDriverClass("com.mysql.jdbc.Driver");
            comboPooledDataSource.setJdbcUrl("jdbc:mysql://localhost:3306/appdb");
            comboPooledDataSource.setUser("root");
            comboPooledDataSource.setPassword("root");
        }
        catch (Exception ex) {
                ex.printStackTrace();
            }
    }

    public static DbManager getInstance() {
        if (dbManager == null)
            dbManager = new DbManager();
        return dbManager;
    }

    public Connection getConnection() {
        try {
            return comboPooledDataSource.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}