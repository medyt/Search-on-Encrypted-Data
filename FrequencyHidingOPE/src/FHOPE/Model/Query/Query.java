package FHOPE.Model.Query;

public abstract class Query {

    protected QueryStrategy queryStrategy;

    public abstract void setArguments();

    public final void execute() {
        queryStrategy.executeQuery();
    }
}
