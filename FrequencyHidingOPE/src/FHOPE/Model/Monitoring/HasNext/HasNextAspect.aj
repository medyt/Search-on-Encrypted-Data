package FHOPE.Model.Monitoring.HasNext;

import java.util.*;

class HasNextMonitor_1 implements Cloneable {
    public Object clone() {
        try {
            HasNextMonitor_1 ret = (HasNextMonitor_1) super.clone();
            return ret;
        }
        catch (CloneNotSupportedException e) {
            throw new InternalError(e.toString());
        }
    }
    boolean[] MOP_b = new boolean[1];
    boolean MOP_violation = false;

    public HasNextMonitor_1 () {
        boolean hasnext = false;
        boolean next = false;
        MOP_b[0] = false;
    }
    synchronized public final void hasnext(Iterator i) {
        boolean hasnext = false;
        boolean next = false;
        hasnext = true;

        boolean MOPPTLTL_truth = false;

        MOPPTLTL_truth = (! next |   MOP_b[0]) ;
        MOP_b[0]  =  hasnext;
        MOP_violation = MOPPTLTL_truth == false;
    }
    synchronized public final void next(Iterator i) {
        boolean hasnext = false;
        boolean next = false;
        next = true;

        boolean MOPPTLTL_truth = false;

        MOPPTLTL_truth = (! next |   MOP_b[0]) ;
        MOP_b[0]  =  hasnext;
        MOP_violation = MOPPTLTL_truth == false;
    }
    synchronized public final boolean MOP_violation() {
        return MOP_violation;
    }
    synchronized public final void reset() {
        boolean hasnext = false;
        boolean next = false;
        MOP_b[0] = false;
        MOP_violation = false;
    }
}

public aspect HasNextAspect {
    static Map makeMap(Object key){
        return new HashMap();
    }

    static Map HasNext_i_Map = null;

    pointcut HasNext_hasnext1(Iterator i) : (call(* Iterator.hasNext()) && target(i)) && !within(FHOPE.Model.Monitoring.HasNext.HasNextMonitor_1) && !within(FHOPE.Model.Monitoring.HasNext.HasNextAspect) && !adviceexecution();
    after (Iterator i) : HasNext_hasnext1(i) {
        Object obj = null;

        HasNextMonitor_1 monitor = null;
        boolean toCreate = false;

        Map m = HasNext_i_Map;
        if(m == null) m = HasNext_i_Map = makeMap(i);

        synchronized(HasNext_i_Map) {
            obj = m.get(i);

            monitor = (HasNextMonitor_1) obj;
            toCreate = (monitor == null);
            if (toCreate){
                monitor = new HasNextMonitor_1();
                m.put(i, monitor);
            }

        }

        {
            monitor.hasnext(i);
            if(monitor.MOP_violation()) {
                System.err.println("! hasNext() has not been called before calling next() for an iterator");
                monitor.reset();
            }
        }
    }

    pointcut HasNext_next1(Iterator i) : (call(* Iterator.next()) && target(i)) && !within(FHOPE.Model.Monitoring.HasNext.HasNextMonitor_1) && !within(FHOPE.Model.Monitoring.HasNext.HasNextAspect) && !adviceexecution();
    before (Iterator i) : HasNext_next1(i) {
        Object obj = null;

        HasNextMonitor_1 monitor = null;
        boolean toCreate = false;

        Map m = HasNext_i_Map;
        if(m == null) m = HasNext_i_Map = makeMap(i);

        synchronized(HasNext_i_Map) {
            obj = m.get(i);

            monitor = (HasNextMonitor_1) obj;
            toCreate = (monitor == null);
            if (toCreate){
                monitor = new HasNextMonitor_1();
                m.put(i, monitor);
            }

        }

        {
            monitor.next(i);
            if(monitor.MOP_violation()) {
                System.err.println("! hasNext() has not been called before calling next() for an iterator");
                monitor.reset();
            }
        }
    }
}


