package model.impl;

public class BinarySearchTreeImpl extends  org.kevoree.modeling.abs.AbstractKObject  implements model.BinarySearchTree {

    public BinarySearchTreeImpl(long p_universe, long p_time, long p_uuid, org.kevoree.modeling.meta.KMetaClass p_metaClass, org.kevoree.modeling.memory.manager.internal.KInternalDataManager p_manager, long p_previousUniverse, long p_previoustTime) {
        super(p_universe, p_time, p_uuid, p_metaClass, p_manager,p_previousUniverse,p_previoustTime);
    }



    
    @Override
    public model.BinarySearchTree addRoot(model.Node p_obj) {
        this.add(model.meta.MetaBinarySearchTree.REL_ROOT, p_obj);
        return this;
    }

    @Override
    public model.BinarySearchTree removeRoot(model.Node p_obj) {
        remove(model.meta.MetaBinarySearchTree.REL_ROOT, p_obj);
        return this;
    }

    @Override
    public void getRoot(final org.kevoree.modeling.KCallback<model.Node[]> cb) {
        if(cb == null){
            return;
        }
        this.getRelation(model.meta.MetaBinarySearchTree.REL_ROOT, new org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>() {
            @Override
            public void on(org.kevoree.modeling.KObject[] kObjects) {
                model.Node[] casted = new model.Node[kObjects.length];
                for(int i=0;i<kObjects.length;i++){
                    casted[i] = (model.Node) kObjects[i];
                }
                cb.on(casted);
            }
        });
    }

    public int sizeOfRoot() {
        return size(model.meta.MetaBinarySearchTree.REL_ROOT);
    }

    



}

