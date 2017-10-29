package View;

import View.Windows.WindowsMaker;

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

    protected WindowsMaker getWindowsMaker() {
        return windowsMaker;
    }
}
