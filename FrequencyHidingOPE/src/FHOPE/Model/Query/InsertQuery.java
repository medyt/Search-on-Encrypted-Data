package FHOPE.Model.Query;

public class InsertQuery extends Query {

    @Override
    public String createQuery(String [] args) throws Exception {
        String query = "insert into customers values (?, ?, ?, ?, ?)";
        return query;
    }
}
