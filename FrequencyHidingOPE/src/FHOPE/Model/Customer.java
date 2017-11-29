package FHOPE.Model;

public class Customer {

    private String username;
    private String email;
    private String balance;
    private String cardnumber;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getCardNumber() {
        return cardnumber;
    }

    public void setCardNumber(String cardnumber) {
        this.cardnumber = cardnumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}