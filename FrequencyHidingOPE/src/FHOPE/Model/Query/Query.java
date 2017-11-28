package FHOPE.Model.Query;

import java.sql.Connection;
import java.sql.PreparedStatement;

public abstract class Query {
    protected Connection connection;

    public abstract String createQuery(String [] args) throws Exception;

    public final void executeQuery(PreparedStatement preparedStmt) throws Exception {
        preparedStmt.execute();
    }
}
