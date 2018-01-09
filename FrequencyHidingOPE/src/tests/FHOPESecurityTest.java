package tests;

import FHOPE.Model.DataStructure.BinarySearchTree;
import org.testng.annotations.Test;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class FHOPESecurityTest {
    final static private int MIN_BOUND = -1;
    final static private int MAX_BOUND = 1024 * 1024;

    private int encrypt(String plain) throws Exception {
        return  BinarySearchTree.getTreeInstance().encrypt(plain, MIN_BOUND, MAX_BOUND);
    }

    @Test
    public void testSQLInjection() {}

    @Test
    public void testBufferOverflows() {}

    @Test
    public void testFrequencyAttack() throws Exception {
        // this is what the attacker has from public knowledge
        Map<String, Integer> lastNameAuxiliaryData = new HashMap<>();
        lastNameAuxiliaryData.put("Smith", 10434747);
        lastNameAuxiliaryData.put("Jones", 5628368);
        lastNameAuxiliaryData.put("Brown", 5429595);
        lastNameAuxiliaryData.put("Johnson", 4628295);
        lastNameAuxiliaryData.put("Williams", 4173254);

        lastNameAuxiliaryData = Util.sortByValue(lastNameAuxiliaryData);

        // now the attacker obtains the leaked database
        // extracts the lastname column which is encrypted
        Map<Integer, Integer> lastNameLeakedData = new HashMap<>();

        int smithCipherText = encrypt("Smith");
        int jonesCipherText = encrypt("Jones");
        int brownCipherText = encrypt("Brown");
        int johnsonCipherText = encrypt("Johnson");
        int williamsCipherText = encrypt("Williams");

        System.out.println("SmithCipherText : " + smithCipherText);
        System.out.println("JonesCipherText : " + jonesCipherText);
        System.out.println("BrownCipherText : " + brownCipherText);
        System.out.println("JohnsonCipherText : " + johnsonCipherText);
        System.out.println("WilliamsCipherText : " + williamsCipherText);

        lastNameLeakedData.put(smithCipherText, 1047);
        lastNameLeakedData.put(jonesCipherText, 568);
        lastNameLeakedData.put(brownCipherText, 585);
        lastNameLeakedData.put(johnsonCipherText, 300);
        lastNameLeakedData.put(williamsCipherText, 200);

        lastNameLeakedData = Util.sortByValue(lastNameLeakedData);

        // finds out the plain last names
        Iterator itLeaked = lastNameLeakedData.entrySet().iterator();
        Iterator itData = lastNameAuxiliaryData.entrySet().iterator();

        System.out.println();

        while (itLeaked.hasNext() && itData.hasNext()) {
            Map.Entry pairLeaked = (Map.Entry) itLeaked.next();
            Map.Entry pairData = (Map.Entry) itData.next();

            System.out.println("Ciphertext " + pairLeaked.getKey() + " matches " + pairData.getKey());

            itData.remove();
            itLeaked.remove();
        }
    }
}
