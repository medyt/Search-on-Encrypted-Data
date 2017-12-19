package model.impl;

public class CustomerImpl extends  org.kevoree.modeling.abs.AbstractKObject  implements model.Customer {

    public CustomerImpl(long p_universe, long p_time, long p_uuid, org.kevoree.modeling.meta.KMetaClass p_metaClass, org.kevoree.modeling.memory.manager.internal.KInternalDataManager p_manager, long p_previousUniverse, long p_previoustTime) {
        super(p_universe, p_time, p_uuid, p_metaClass, p_manager,p_previousUniverse,p_previoustTime);
    }


    @Override
    public java.lang.String getPassword() {
        return (java.lang.String) get(model.meta.MetaCustomer.ATT_PASSWORD);
    }

    @Override
    public model.Customer setPassword(java.lang.String p_obj) {
        set(model.meta.MetaCustomer.ATT_PASSWORD, p_obj);
        return this;
    }


    @Override
    public java.lang.String getBalance() {
        return (java.lang.String) get(model.meta.MetaCustomer.ATT_BALANCE);
    }

    @Override
    public model.Customer setBalance(java.lang.String p_obj) {
        set(model.meta.MetaCustomer.ATT_BALANCE, p_obj);
        return this;
    }


    @Override
    public java.lang.String getCardnumber() {
        return (java.lang.String) get(model.meta.MetaCustomer.ATT_CARDNUMBER);
    }

    @Override
    public model.Customer setCardnumber(java.lang.String p_obj) {
        set(model.meta.MetaCustomer.ATT_CARDNUMBER, p_obj);
        return this;
    }


    @Override
    public java.lang.String getEmail() {
        return (java.lang.String) get(model.meta.MetaCustomer.ATT_EMAIL);
    }

    @Override
    public model.Customer setEmail(java.lang.String p_obj) {
        set(model.meta.MetaCustomer.ATT_EMAIL, p_obj);
        return this;
    }


    @Override
    public java.lang.String getUsername() {
        return (java.lang.String) get(model.meta.MetaCustomer.ATT_USERNAME);
    }

    @Override
    public model.Customer setUsername(java.lang.String p_obj) {
        set(model.meta.MetaCustomer.ATT_USERNAME, p_obj);
        return this;
    }







}

