package model;

public interface BinarySearchTree extends org.kevoree.modeling.KObject {


    public model.BinarySearchTree addRoot(model.Node p_obj);
    public model.BinarySearchTree removeRoot(model.Node p_obj);
    public void getRoot(org.kevoree.modeling.KCallback<model.Node[]> cb);
    public int sizeOfRoot();






}

