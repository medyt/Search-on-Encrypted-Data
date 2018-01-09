package tests;

import FHOPE.Model.DataStructure.BinarySearchTree;
import org.testng.Assert;
import org.testng.annotations.*;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.asList;


public class BinarySearchTreeTest {
    private static final int minBound = -1;
    private static final int maxBound = 128;

    private int safeEncrypt(final BinarySearchTree tree, final String plaintext) {
        try {
            return tree.encrypt(plaintext, minBound, maxBound);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    private String safeDecrypt(final BinarySearchTree tree, final int cipher) {
        try {
            if (tree.isRootSet()) {
                return tree.decrypt(cipher);
            }
            throw new Exception("Attempt to decrypt but root is not set");
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
        return new Object[][] { {asList("plain-1", "plain-1", "plain-2", "plain-3", "plain-4", "plain-5")} };
    }

    @Test
    public void testNullRootAtInstantiation() throws Exception {
        BinarySearchTree.cleanInstance();
        Assert.assertNull(BinarySearchTree.root);
    }

    @Test(dataProvider = "Plaintexts")
    public void testPlaintextsEncryption(final String plain) throws Exception {
        BinarySearchTree.cleanInstance();
        BinarySearchTree tree = BinarySearchTree.getTreeInstance();

        int cipher = tree.encrypt(plain, minBound, maxBound);

        Assert.assertTrue(cipher >= minBound && cipher <= maxBound);
    }

    @Test(dataProvider = "Plaintexts")
    public void testPlaintextsDecryption(final String plain) throws Exception {
        BinarySearchTree.cleanInstance();
        BinarySearchTree tree = BinarySearchTree.getTreeInstance();

        int cipher = tree.encrypt(plain, minBound, maxBound);

        Assert.assertEquals(tree.decrypt(cipher), plain);
    }

    @Test(dataProvider = "ArrayOfPlaintexts")
    public void testArrayOfPlaintextsEncryption(final List<String> plaintexts) throws Exception {
        BinarySearchTree.cleanInstance();
        BinarySearchTree tree = BinarySearchTree.getTreeInstance();

        List<Integer> ciphers = plaintexts.stream()
                                          .map(p -> safeEncrypt(tree, p))
                                          .collect(Collectors.toList());
        Assert.assertEquals(ciphers.stream()
                                   .filter(c -> (minBound <= c && maxBound >= c))
                                   .collect(Collectors.toList()), ciphers);
    }

    @Test(dataProvider = "ArrayOfPlaintexts")
    public void testArrayOfPlaintextsDecryption(final List<String> plaintexts) throws Exception {
        BinarySearchTree.cleanInstance();
        BinarySearchTree tree = BinarySearchTree.getTreeInstance();

        List<Integer> ciphers = plaintexts.stream()
                                          .map(p -> safeEncrypt(tree, p))
                                          .collect(Collectors.toList());
        List<String> decryptedCiphers = ciphers.stream()
                                               .map(c -> safeDecrypt(tree, c))
                                               .collect(Collectors.toList());
        Assert.assertEquals(plaintexts, decryptedCiphers);
    }
}
