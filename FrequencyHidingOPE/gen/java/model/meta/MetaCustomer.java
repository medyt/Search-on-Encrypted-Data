package model.meta;

public class MetaCustomer extends org.kevoree.modeling.meta.impl.MetaClass {

private static MetaCustomer INSTANCE = null;

public static MetaCustomer getInstance() {
if (INSTANCE == null) {
INSTANCE = new MetaCustomer();
}
return INSTANCE;
}


        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_PASSWORD = new org.kevoree.modeling.meta.impl.MetaAttribute("password", 0, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    
        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_BALANCE = new org.kevoree.modeling.meta.impl.MetaAttribute("balance", 1, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    
        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_CARDNUMBER = new org.kevoree.modeling.meta.impl.MetaAttribute("cardnumber", 2, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    
        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_EMAIL = new org.kevoree.modeling.meta.impl.MetaAttribute("email", 3, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    
        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_USERNAME = new org.kevoree.modeling.meta.impl.MetaAttribute("username", 4, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    




private MetaCustomer() {
super("model.Customer", 2, null, new int[]{  });
org.kevoree.modeling.meta.KMeta[] temp_all = new org.kevoree.modeling.meta.KMeta[5+0+0+0+0  ];
temp_all[0] = ATT_PASSWORD;
    temp_all[1] = ATT_BALANCE;
    temp_all[2] = ATT_CARDNUMBER;
    temp_all[3] = ATT_EMAIL;
    temp_all[4] = ATT_USERNAME;
    

init(temp_all);
}
}


