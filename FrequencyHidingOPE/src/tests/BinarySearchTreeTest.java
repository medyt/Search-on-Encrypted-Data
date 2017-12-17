package tests;

import FHOPE.Model.DataStructure.BinarySearchTree;
import org.testng.Assert;
import org.testng.annotations.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class BinarySearchTreeTest {
    private static final int minBound = -1;
    private static final int maxBound = 128;

    private String safeDecrypt(final BinarySearchTree tree, final int cipher) {
        try {
            return tree.decrypt(cipher);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    @DataProvider(name = "Plaintexts")
    public static Object[][] createPlaintexts() {
        return new Object[][] { {"ascii-plain-112"}, {"unicode\u002dtext"},  {""} };
    }

    @DataProvider(name = "ArrayOfPlaintexts")
    public static Object[][] createArrayOfPlaintexts() {
        return new Object[][] { {Arrays.asList("plain-1", "plain-2", "plain-3", "plain-4", "plain-5")} };
    }

    @Test(dataProvider = "Plaintexts")
    public void testPlaintextsEncryption(final String plain) throws Exception {
        BinarySearchTree tree = BinarySearchTree.getTreeInstance();

        Assert.assertNull(tree.root);

        int cipher = tree.encrypt(plain, minBound, maxBound);

        Assert.assertNotNull(tree.root);
        Assert.assertTrue(cipher >= minBound && cipher <= maxBound);
        Assert.assertEquals(tree.decrypt(cipher), plain);
    }

    @Test(dataProvider = "ArrayOfPlaintexts")
    public void testArrayOfPlaintextsEncryption(final List<String> plaintexts) throws Exception {
        BinarySearchTree tree = BinarySearchTree.getTreeInstance();

        List<Integer> ciphers = plaintexts.stream()
                                          .map(p -> tree.encrypt(p, minBound, maxBound))
                                          .collect(Collectors.toList());
        List<String> decryptedCiphers = ciphers.stream()
                                               .map(c -> safeDecrypt(tree, c))
                                               .collect(Collectors.toList());
        Assert.assertEquals(plaintexts, decryptedCiphers);
    }
}
