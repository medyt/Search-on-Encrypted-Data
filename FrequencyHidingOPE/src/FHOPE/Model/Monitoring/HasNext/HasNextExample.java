package FHOPE.Model.Monitoring.HasNext;

import java.util.Iterator;
import java.util.Vector;

public class HasNextExample {
    private static void printWithoutHasNext(Vector<Integer> numbers) {
        Iterator it = numbers.iterator();
        System.out.println(it.next());
    }

    private static void printWithHasNext(Vector<Integer> numbers) {
        Iterator it = numbers.iterator();
        if (it.hasNext()) {
            System.out.println(it.next());
        }
    }

    public static void main(String [] args) {
        Vector<Integer> numbers = new Vector<>();
        numbers.add(1995);
        printWithoutHasNext(numbers);
        printWithHasNext(numbers);
    }
}
