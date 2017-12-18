package FHOPE.Model.DataStructure;

import java.util.Random;

public class BinarySearchTree {
    public static Node root;
    private static BinarySearchTree treeInstance;

    private BinarySearchTree() {
        treeInstance = null;
        root = null;
    }

    public static void cleanInstance() {
        treeInstance = new BinarySearchTree();
    }

    public static BinarySearchTree getTreeInstance() {
        if (treeInstance == null) {
            treeInstance = new BinarySearchTree();
        }

        return treeInstance;
    }

    public int encrypt(final String plain, int minBound, int maxBound) {
        if (root == null) {
            root = new Node((int) Math.ceil((maxBound - minBound)/2), plain);
            return root.cipher;
        }

        Node current = root, parent;
        int coin = -1;

        while (true) {
            if (plain.equals(current.plain)) {
                coin = new Random().nextInt(2);
            }

            parent = current;

            if (plain.compareTo(current.plain) > 0 || coin == 1) {
                minBound = current.cipher;
                current = current.right;

                if (current == null) {
                    parent.right = new Node(parent.cipher + (int) Math.ceil((maxBound - parent.cipher) / 2.0), plain);
                    return parent.right.cipher;
                }
            }

            else if (plain.compareTo(current.plain) < 0 || coin == 0) {
                maxBound = current.cipher;
                current = current.left;

                if (current == null) {
                    parent.left = new Node(parent.cipher + (int) Math.ceil((parent.cipher - minBound) / 2.0), plain);
                    return parent.left.cipher;
                }
            }
        }
    }

    public String decrypt(final int cipher) throws Exception{
        Node current = root;

        while (current != null) {
            if (current.cipher > cipher) {
                current = current.left;
            }
            else if (current.cipher < cipher) {
                current = current.right;
            }
            else {
                return current.plain;
            }
        }

        throw new Exception("The value could not be decrypted");
    }
}

class Node {
    Node left;
    Node right;
    int cipher;
    String plain;

    public Node(int cipher, String plain) {
        this.cipher = cipher;
        this.plain = plain;
        this.left = null;
        this.right = null;
    }
}