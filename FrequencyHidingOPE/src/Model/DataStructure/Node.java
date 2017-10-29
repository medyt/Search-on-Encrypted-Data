package Model.DataStructure;

public class Node {
    private Node left;
    private Node right;
    private String cipher;
    private String plain;

    public Node getLeft() {
        return left;
    }

    public void setLeft(Node left) {
        this.left = left;
    }

    public Node getRight() {
        return right;
    }

    public void setRight(Node right) {
        this.right = right;
    }

    public String getCipher() {
        return cipher;
    }

    public void setCipher(String cipher) {
        this.cipher = cipher;
    }

    public String getPlain() {
        return plain;
    }

    public void setPlain(String plain) {
        this.plain = plain;
    }

    public Node(Node left, Node right, String cipher, String plain) {
        this.left = left;
        this.right = right;
        this.cipher = cipher;
        this.plain = plain;
    }
}
