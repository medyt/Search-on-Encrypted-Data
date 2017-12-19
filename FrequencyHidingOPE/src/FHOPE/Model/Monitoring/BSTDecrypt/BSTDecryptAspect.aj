package FHOPE.Model.Monitoring.BSTDecrypt;

import FHOPE.Model.DataStructure.BinarySearchTree;

import java.util.*;


class BSTDecryptMonitor_1 implements Cloneable {
    public Object clone() {
        try {
            BSTDecryptMonitor_1 ret = (BSTDecryptMonitor_1) super.clone();
            return ret;
        }
        catch (CloneNotSupportedException e) {
            throw new InternalError(e.toString());
        }
    }
    boolean[] MOP_b = new boolean[1];
    boolean MOP_violation = false;

    public BSTDecryptMonitor_1 () {
        boolean setroot = false;
        boolean decrypt = false;
        MOP_b[0] = false;
    }
    synchronized public final void setroot(BinarySearchTree bst) {
        boolean setroot = false;
        boolean decrypt = false;
        setroot = true;

        boolean MOPPTLTL_truth = false;

        MOPPTLTL_truth = (! decrypt |   MOP_b[0]) ;
        MOP_b[0]  =  setroot;
        MOP_violation = MOPPTLTL_truth == false;
    }
    synchronized public final void decrypt(BinarySearchTree bst) {
        boolean setroot = false;
        boolean decrypt = false;
        decrypt = true;

        boolean MOPPTLTL_truth = false;

        MOPPTLTL_truth = (! decrypt |   MOP_b[0]) ;
        MOP_b[0]  =  setroot;
        MOP_violation = MOPPTLTL_truth == false;
    }
    synchronized public final boolean MOP_violation() {
        return MOP_violation;
    }
    synchronized public final void reset() {
        boolean setroot = false;
        boolean decrypt = false;
        MOP_b[0] = false;
        MOP_violation = false;
    }
}

public aspect BSTDecryptAspect {
    static Map makeMap(Object key){
        return new HashMap();
    }
    static List makeList(){
        return new ArrayList();
    }

    static Map BSTDecrypt_bst_Map = null;

    pointcut BSTDecrypt_setroot1(BinarySearchTree bst) : (call(* isRootSet()) && target(bst)) && !within(BSTDecryptMonitor_1) && !within(BSTDecryptAspect) && !adviceexecution();
    after (BinarySearchTree bst) : BSTDecrypt_setroot1(bst) {
        Object obj = null;

        BSTDecryptMonitor_1 monitor = null;
        boolean toCreate = false;

        Map m = BSTDecrypt_bst_Map;
        if(m == null) m = BSTDecrypt_bst_Map = makeMap(bst);

        synchronized(BSTDecrypt_bst_Map) {
            obj = m.get(bst);

            monitor = (BSTDecryptMonitor_1) obj;
            toCreate = (monitor == null);
            if (toCreate){
                monitor = new BSTDecryptMonitor_1();
                m.put(bst, monitor);
            }

        }

        {
            monitor.setroot(bst);
            if(monitor.MOP_violation()) {
                System.err.println("! decrypt without checking if the root is set");
                monitor.reset();
            }

        }
    }

    pointcut BSTDecrypt_decrypt1(BinarySearchTree bst) : (call(* decrypt(..)) && target(bst)) && !within(BSTDecryptMonitor_1) && !within(BSTDecryptAspect) && !adviceexecution();
    before (BinarySearchTree bst) : BSTDecrypt_decrypt1(bst) {
        Object obj = null;

        BSTDecryptMonitor_1 monitor = null;
        boolean toCreate = false;

        Map m = BSTDecrypt_bst_Map;
        if(m == null) m = BSTDecrypt_bst_Map = makeMap(bst);

        synchronized(BSTDecrypt_bst_Map) {
            obj = m.get(bst);

            monitor = (BSTDecryptMonitor_1) obj;
            toCreate = (monitor == null);
            if (toCreate){
                monitor = new BSTDecryptMonitor_1();
                m.put(bst, monitor);
            }

        }

        {
            monitor.decrypt(bst);
            if(monitor.MOP_violation()) {
                System.err.println("! decrypt without checking if the root is set");
                monitor.reset();
            }

        }
    }

}


