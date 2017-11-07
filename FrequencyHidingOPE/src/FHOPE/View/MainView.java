package FHOPE.View;

import FHOPE.Model.DbManager;
import FHOPE.View.Windows.WindowsMaker;

public class MainView {
    private static MainView mainViewInstance = null;
    private WindowsMaker windowsMaker;

    private MainView() {
        windowsMaker = new WindowsMaker();
    }

    public static MainView getMainViewInstance() {
        if (mainViewInstance == null) {
            mainViewInstance = new MainView();
        }
        return mainViewInstance;
    }

    public static void main(String [] args) throws Exception {
        DbManager dao = new DbManager();
        dao.createDbConnection();
    }

    protected WindowsMaker getWindowsMaker() {
        return windowsMaker;
    }
}
