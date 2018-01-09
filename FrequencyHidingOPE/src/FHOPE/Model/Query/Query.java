package FHOPE.Model.Query;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public abstract class Query {
    public abstract String createQuery() throws Exception;

    public boolean execute(PreparedStatement preparedStmt) throws Exception {
        return preparedStmt.execute();
    }

    public ResultSet executeQuery(PreparedStatement preparedStmt) throws Exception {
        return preparedStmt.executeQuery();
    }

    public abstract String createQueryPass();
}
