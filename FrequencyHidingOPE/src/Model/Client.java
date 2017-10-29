package Model;

public class Client {

    public Client() {
        dbManager.attach(this);
    }

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private DbManager dbManager;
    public void update() {}
}