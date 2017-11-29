package FHOPE.Model;
import FHOPE.Model.Customer;
import FHOPE.Services.IOservice;
import FHOPE.Services.QueryService;

import java.io.File;
import java.io.IOException;
import java.security.Timestamp;
import java.text.SimpleDateFormat;

public aspect CustomerAspect {
    pointcut changeName(Customer newCustomer,String name):
            call(public void setUsername(String)) && args(name) && target(newCustomer);
    before(Customer newCustomer,String name) : changeName(newCustomer,name)
            {
                System.out.println("inainte de a schimba numele \n");
            }

    pointcut insertQueryStatus(QueryService service,Customer customer):
            call (public void insert(Customer)) && args(customer) && target(service);
    before(QueryService service,Customer customer) : insertQueryStatus(service,customer)
            {
                String currentLog = "A new user with username = " + customer.getUsername()+" is trying to register in database";
                IOservice.writeFileLog("logs/registerLogs.txt",currentLog);
            }

    after(QueryService service,Customer customer) : insertQueryStatus(service,customer)
            {
                String currentLog = "The new user with username = "+customer.getUsername() + "is now registered in database \n";
                IOservice.writeFileLog("logs/registerLogs.txt",currentLog);
            }

   /* pointcut changeName():
            call (public void Customer.setUsername(String));
    before():changeName()
            {
                System.out.println("changed");
            }*/

}
