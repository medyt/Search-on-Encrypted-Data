package FHOPE.Model.Query;

public class AlterQuery extends Query {

    @Override
    public String createQuery() throws Exception {
        String query = "UPDATE CUSTOMERS SET balance=? WHERE username = ?";
        return query;
    }

    public String createQueryPass() {
        String query = "UPDATE CUSTOMERS SET password =? WHERE username = ?";
        return query;
    }
}
