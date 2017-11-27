package FHOPE.Model;

public class Login
{
    private  String cardNo;
    private  String id;
    private static int balance;

    public  String getId() {
        return id;
    }

    public void setId(String pinCode) {
        this.id = pinCode;
    }

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public static int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
}
