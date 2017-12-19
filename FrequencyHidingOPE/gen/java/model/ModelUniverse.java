package model;

public class ModelUniverse extends org.kevoree.modeling.abs.AbstractKUniverse<ModelView, ModelUniverse> {

    protected ModelUniverse(long p_key, org.kevoree.modeling.memory.manager.internal.KInternalDataManager p_manager) {
        super(p_key, p_manager);
    }

    @Override
    protected ModelView internal_create(long timePoint) {
        return new model.impl.ModelViewImpl(_universe, timePoint, _manager);
    }

}

