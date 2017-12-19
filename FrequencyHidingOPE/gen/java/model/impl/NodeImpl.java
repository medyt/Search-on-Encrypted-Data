package model.impl;

public class NodeImpl extends  org.kevoree.modeling.abs.AbstractKObject  implements model.Node {

    public NodeImpl(long p_universe, long p_time, long p_uuid, org.kevoree.modeling.meta.KMetaClass p_metaClass, org.kevoree.modeling.memory.manager.internal.KInternalDataManager p_manager, long p_previousUniverse, long p_previoustTime) {
        super(p_universe, p_time, p_uuid, p_metaClass, p_manager,p_previousUniverse,p_previoustTime);
    }


    @Override
    public java.lang.String getCypher() {
        return (java.lang.String) get(model.meta.MetaNode.ATT_CYPHER);
    }

    @Override
    public model.Node setCypher(java.lang.String p_obj) {
        set(model.meta.MetaNode.ATT_CYPHER, p_obj);
        return this;
    }


    @Override
    public java.lang.String getPlain() {
        return (java.lang.String) get(model.meta.MetaNode.ATT_PLAIN);
    }

    @Override
    public model.Node setPlain(java.lang.String p_obj) {
        set(model.meta.MetaNode.ATT_PLAIN, p_obj);
        return this;
    }



    
    @Override
    public model.Node addLeft(model.Node p_obj) {
        this.add(model.meta.MetaNode.REL_LEFT, p_obj);
        return this;
    }

    @Override
    public model.Node removeLeft(model.Node p_obj) {
        remove(model.meta.MetaNode.REL_LEFT, p_obj);
        return this;
    }

    @Override
    public void getLeft(final org.kevoree.modeling.KCallback<model.Node[]> cb) {
        if(cb == null){
            return;
        }
        this.getRelation(model.meta.MetaNode.REL_LEFT, new org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>() {
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

    public int sizeOfLeft() {
        return size(model.meta.MetaNode.REL_LEFT);
    }

            
    @Override
    public model.Node addRight(model.Node p_obj) {
        this.add(model.meta.MetaNode.REL_RIGHT, p_obj);
        return this;
    }

    @Override
    public model.Node removeRight(model.Node p_obj) {
        remove(model.meta.MetaNode.REL_RIGHT, p_obj);
        return this;
    }

    @Override
    public void getRight(final org.kevoree.modeling.KCallback<model.Node[]> cb) {
        if(cb == null){
            return;
        }
        this.getRelation(model.meta.MetaNode.REL_RIGHT, new org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>() {
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

    public int sizeOfRight() {
        return size(model.meta.MetaNode.REL_RIGHT);
    }

            



}

