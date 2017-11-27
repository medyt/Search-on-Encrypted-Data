package FHOPE.Model;

import FHOPE.Controller.LoginController;

import java.sql.SQLException;

import static FHOPE.Model.Login.*;

public aspect CustomerAspect {
    pointcut changeCardNumber() :
            call (public void Customer.setCardNumber(String));
    after():changeCardNumber()
            {
                System.out.println("After :: Updated database \n ");
            }
    before():changeCardNumber()
            {
                System.out.println("verify user Pin in \n ");
            }

    pointcut proceedTransaction():
            call (public void Customer.setBalance(int));
    after():proceedTransaction()
            {
                System.out.println("After Transaction : Update balance in database \n");
            }
    before():proceedTransaction()
            {
                System.out.println("verify user Pin if is bigger than 100 in \n ");
            }

    pointcut changePinCode():
            call (public void Customer.setPin(String));
    after():changePinCode()
            {
                System.out.println("After Transaction : Update pin code in database \n");
            }
    before():changePinCode()
            {
                System.out.println("After Transaction : verify Pin code \n");
            }
}
