package FHOPE.Model.Query;

public class InsertQuery extends Query {

    @Override
    public String createQuery() throws Exception {
        String query = "insert into customers values (?, ?, ?, ?, ?)";
        return query;
    }

    @Override
    public String createQueryPass() {
        return null;
    }
}
