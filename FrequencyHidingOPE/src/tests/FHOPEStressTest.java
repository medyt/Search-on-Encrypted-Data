package tests;


import org.testng.annotations.Test;

public class FHOPEStressTest extends FHOPEPerformanceTest {

    private FHOPEStressTest() throws Exception {
        super();
    }

    @Test
    public void testStressMultipleQueries() {
        NUM_OF_THREADS = 1;
        NUM_OF_QUERIES = 1000;

        doPerformanceTesting();
    }

    @Test
    public void testStressMultipleThreads() {
        NUM_OF_THREADS = 500;
        NUM_OF_QUERIES = 1;

        doPerformanceTesting();
    }
}