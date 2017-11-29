package FHOPE.View;

import FHOPE.View.Windows.RegisterWindow;
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
        //LoginWindow login = new LoginWindow();
       // login.draw();

        // here should be an instance of QueryWindow that uses QueryService
        // exactly as was done for Login

       /* QueryService queryController = new QueryService();
        queryController.insert(new String[]{"User7", "mail2", "112", "1122334455667788", "password"});
        queryController.insert(new String[]{"User6", "mail2", "112", "1122334455667788", "password"});*/

        RegisterWindow register = new RegisterWindow();
        register.draw();
    }
}
