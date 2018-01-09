package tests;

import FHOPE.Model.Customer;
import FHOPE.Services.QueryService;

import java.util.Random;

public abstract class FHOPEPerformanceTest extends Thread {
    protected static int NUM_OF_THREADS;
    protected static int NUM_OF_QUERIES;
    private static int CURR_ID = 0;

    private final static String USERNAME = "username";
    private final static String PASSWORD = "password";
    private final static String EMAIL = "email";
    private final static String CARD_NUMBER = "12345";

    private static QueryService queryService;
    private int threadId;

    private synchronized static int getNextId() {
        return CURR_ID ++;
    }

    protected FHOPEPerformanceTest() throws Exception {
        super();
        queryService = new QueryService();
        threadId = getNextId();
    }

    protected static void doPerformanceTesting() {
        try {
            long startTime = System.currentTimeMillis();
            Thread[] threadList = new Thread[NUM_OF_THREADS];

            for (int i = 0; i < NUM_OF_THREADS; i++) {
                threadList[i] = new FHOPEPerformanceTest() {};
                threadList[i].start();
            }

            for (int i = 0; i < NUM_OF_THREADS; i++) {
                threadList[i].join();
            }

            long stopTime = System.currentTimeMillis();
            long elapsedTime = stopTime - startTime;

            System.out.println("\n Elapsed time : " + elapsedTime + " ms.");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void run() {
        try {
            Customer newCustomer = new Customer();
            for (int queryIdx = 0; queryIdx < NUM_OF_QUERIES; queryIdx ++) {
                newCustomer.setUsername(USERNAME + threadId + queryIdx);
                newCustomer.setPassword(PASSWORD + new Random().nextInt(NUM_OF_QUERIES));
                newCustomer.setEmail(EMAIL + threadId + queryIdx);
                newCustomer.setCardNumber(CARD_NUMBER + threadId + queryIdx);
                queryService.insert(newCustomer);
            }

            System.out.println("Thread " + threadId +  " is finished.");
        }
        catch (Exception e) {
            System.out.println("Thread " + threadId + " got Exception: " + e);
            e.printStackTrace();
        }
    }
}