package model;

public class ModelModel extends org.kevoree.modeling.abs.AbstractKModel<ModelUniverse>
    {

    private org.kevoree.modeling.meta.KMetaModel _metaModel;

    public ModelModel(org.kevoree.modeling.memory.manager.internal.KInternalDataManager p_manager) {
    super(p_manager);
    _metaModel = new org.kevoree.modeling.meta.impl.MetaModel("Model");
    org.kevoree.modeling.meta.KMetaClass[] tempMetaClasses = new org.kevoree.modeling.meta.KMetaClass[3];
                tempMetaClasses[1] = model.meta.MetaBinarySearchTree.getInstance();
                    tempMetaClasses[2] = model.meta.MetaCustomer.getInstance();
                    tempMetaClasses[0] = model.meta.MetaNode.getInstance();
            org.kevoree.modeling.meta.KMetaEnum[] tempEnums = new org.kevoree.modeling.meta.KMetaEnum[0];
    

    ((org.kevoree.modeling.meta.impl.MetaModel) _metaModel).init(tempMetaClasses,tempEnums);
    }

    @Override
    protected ModelUniverse internalCreateUniverse(long key) {
        return new ModelUniverse(key,_manager);
    }

    @Override
    public org.kevoree.modeling.meta.KMetaModel metaModel() {
        return _metaModel;
    }

    @Override
    protected org.kevoree.modeling.KObject internalCreateObject(long universe, long time, long uuid,org.kevoree.modeling.meta.KMetaClass p_clazz, long previousUniverse, long previousTime) {
    if (p_clazz == null) {
    return null;
    }
    switch (p_clazz.index()) {
                case 1 : return new model.impl.BinarySearchTreeImpl(universe, time, uuid, p_clazz, _manager,previousUniverse,previousTime);
                    case 2 : return new model.impl.CustomerImpl(universe, time, uuid, p_clazz, _manager,previousUniverse,previousTime);
                    case 0 : return new model.impl.NodeImpl(universe, time, uuid, p_clazz, _manager,previousUniverse,previousTime);
            default : return new org.kevoree.modeling.meta.impl.GenericObject(universe, time, uuid, p_clazz, _manager,previousUniverse,previousTime);
    }
    }

    
        public model.BinarySearchTree createBinarySearchTree(long universe,long time) {
            return (model.BinarySearchTree) this.create(model.meta.MetaBinarySearchTree.getInstance(), universe, time);
        }
        
        public model.Customer createCustomer(long universe,long time) {
            return (model.Customer) this.create(model.meta.MetaCustomer.getInstance(), universe, time);
        }
        
        public model.Node createNode(long universe,long time) {
            return (model.Node) this.create(model.meta.MetaNode.getInstance(), universe, time);
        }
        
    }

