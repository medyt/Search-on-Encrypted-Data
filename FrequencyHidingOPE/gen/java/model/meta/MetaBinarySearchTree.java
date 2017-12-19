package model.meta;

public class MetaBinarySearchTree extends org.kevoree.modeling.meta.impl.MetaClass {

private static MetaBinarySearchTree INSTANCE = null;

public static MetaBinarySearchTree getInstance() {
if (INSTANCE == null) {
INSTANCE = new MetaBinarySearchTree();
}
return INSTANCE;
}


public static final org.kevoree.modeling.meta.KMetaRelation REL_ROOT = new org.kevoree.modeling.meta.impl.MetaRelation("root", 0, true, 0,"op_BinarySearchTree_root",1,-1);




private MetaBinarySearchTree() {
super("model.BinarySearchTree", 1, null, new int[]{  });
org.kevoree.modeling.meta.KMeta[] temp_all = new org.kevoree.modeling.meta.KMeta[0+1+0+0+0  ];
temp_all[0] = REL_ROOT;
    

init(temp_all);
}
}


