package FHOPE.Model;
import FHOPE.Model.Customer;
import FHOPE.Services.IOservice;
import FHOPE.Services.QueryService;

import java.io.File;
import java.io.IOException;
import java.security.Timestamp;
import java.text.SimpleDateFormat;

public aspect CustomerAspect {
    pointcut registerQueryStatus(QueryService service,Customer customer):
            call (public void insert(Customer)) && args(customer) && target(service);
    before(QueryService service,Customer customer) : registerQueryStatus(service,customer)
            {
                String currentLog = "A new user with username = " + customer.getUsername()+" is trying to register in database";
                IOservice.writeFileLog("logs/registerLogs.txt",currentLog);
            }

    after(QueryService service,Customer customer) : registerQueryStatus(service,customer)
            {
                String currentLog = "The new user with username = "+customer.getUsername() + "is now registered in database \n";
                IOservice.writeFileLog("logs/registerLogs.txt",currentLog);
            }

    pointcut loginQueryStatus(QueryService service,Customer customer):
            call (public void select(Customer)) && args(customer) && target(service);
    before(QueryService service,Customer customer) : loginQueryStatus(service,customer)
            {
                String currentLog = "The Customer " + customer.getUsername()+" is trying to login";
                IOservice.writeFileLog("logs/registerLogs.txt",currentLog);
            }

    after(QueryService service,Customer customer) : loginQueryStatus(service,customer)
            {
                String currentLog = "The Customer " + customer.getUsername()+ "is now online \n";
                IOservice.writeFileLog("logs/registerLogs.txt",currentLog);
            }
}
