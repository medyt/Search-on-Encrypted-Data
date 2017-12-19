package model.meta;

public class MetaNode extends org.kevoree.modeling.meta.impl.MetaClass {

private static MetaNode INSTANCE = null;

public static MetaNode getInstance() {
if (INSTANCE == null) {
INSTANCE = new MetaNode();
}
return INSTANCE;
}


        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_CYPHER = new org.kevoree.modeling.meta.impl.MetaAttribute("cypher", 0, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    
        public static final org.kevoree.modeling.meta.KMetaAttribute ATT_PLAIN = new org.kevoree.modeling.meta.impl.MetaAttribute("plain", 1, 0, false, -2, org.kevoree.modeling.extrapolation.impl.DiscreteExtrapolation.instance());
    
public static final org.kevoree.modeling.meta.KMetaRelation REL_LEFT = new org.kevoree.modeling.meta.impl.MetaRelation("left", 2, true, 0,"op_Node_left",0,-1);
public static final org.kevoree.modeling.meta.KMetaRelation REL_OP_BINARYSEARCHTREE_ROOT = new org.kevoree.modeling.meta.impl.MetaRelation("op_BinarySearchTree_root", 3, false, 1,"root",0,-1);
public static final org.kevoree.modeling.meta.KMetaRelation REL_RIGHT = new org.kevoree.modeling.meta.impl.MetaRelation("right", 4, true, 0,"op_Node_right",0,-1);
public static final org.kevoree.modeling.meta.KMetaRelation REL_OP_NODE_LEFT = new org.kevoree.modeling.meta.impl.MetaRelation("op_Node_left", 5, false, 0,"left",0,-1);
public static final org.kevoree.modeling.meta.KMetaRelation REL_OP_NODE_RIGHT = new org.kevoree.modeling.meta.impl.MetaRelation("op_Node_right", 6, false, 0,"right",0,-1);




private MetaNode() {
super("model.Node", 0, null, new int[]{  });
org.kevoree.modeling.meta.KMeta[] temp_all = new org.kevoree.modeling.meta.KMeta[2+5+0+0+0  ];
temp_all[0] = ATT_CYPHER;
    temp_all[1] = ATT_PLAIN;
    temp_all[2] = REL_LEFT;
    temp_all[3] = REL_OP_BINARYSEARCHTREE_ROOT;
    temp_all[4] = REL_RIGHT;
    temp_all[5] = REL_OP_NODE_LEFT;
    temp_all[6] = REL_OP_NODE_RIGHT;
    

init(temp_all);
}
}


