package FHOPE.Model.Query;

public class SelectQuery extends Query {

    @Override
    public String createQuery() throws Exception {
        String query = "SELECT * FROM customers WHERE username = ?";
        return query;
    }

    @Override
    public String createQueryPass() {
        return null;
    }
}
