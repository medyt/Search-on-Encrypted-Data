package model.impl;

public class ModelViewImpl extends org.kevoree.modeling.abs.AbstractKView implements model.ModelView {

    public ModelViewImpl(long p_universe, long _time, org.kevoree.modeling.memory.manager.internal.KInternalDataManager p_manager) {
        super(p_universe, _time, p_manager);
    }

    @Override
    public model.BinarySearchTree createBinarySearchTree() {
        return (model.BinarySearchTree) this.create(model.meta.MetaBinarySearchTree.getInstance());
    }
    @Override
    public model.Customer createCustomer() {
        return (model.Customer) this.create(model.meta.MetaCustomer.getInstance());
    }
    @Override
    public model.Node createNode() {
        return (model.Node) this.create(model.meta.MetaNode.getInstance());
    }

}

