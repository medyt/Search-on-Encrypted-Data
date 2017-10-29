package Model;

import java.util.List;

public class DbManager {
    public void createDbConnection() {}

    private List<Client> clients;

    public void attach(Client client) {}

    public void notifyAllObservers(){
        for (Client client : clients) {
            client.update();
        }
    }
}
