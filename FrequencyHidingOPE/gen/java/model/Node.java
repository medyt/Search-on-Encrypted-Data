package model;

public interface Node extends org.kevoree.modeling.KObject {

    public java.lang.String getCypher();
    public model.Node setCypher(java.lang.String p_obj);
    public java.lang.String getPlain();
    public model.Node setPlain(java.lang.String p_obj);

    public model.Node addLeft(model.Node p_obj);
    public model.Node removeLeft(model.Node p_obj);
    public void getLeft(org.kevoree.modeling.KCallback<model.Node[]> cb);
    public int sizeOfLeft();
    public model.Node addRight(model.Node p_obj);
    public model.Node removeRight(model.Node p_obj);
    public void getRight(org.kevoree.modeling.KCallback<model.Node[]> cb);
    public int sizeOfRight();






}

