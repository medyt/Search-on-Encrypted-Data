package FHOPE.Controller;

import FHOPE.Model.DbManager;

public abstract class Controller {
    protected DbManager dbm = null;

    protected Controller() throws Exception {
        if (dbm == null) {
            dbm = new DbManager();
        }
    }
}
