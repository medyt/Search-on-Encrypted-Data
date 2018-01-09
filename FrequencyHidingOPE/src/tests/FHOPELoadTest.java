package tests;

import org.testng.annotations.Test;

public class FHOPELoadTest extends FHOPEPerformanceTest {

    private FHOPELoadTest() throws Exception {
        super();
    }

    @Test
    public void testStressMultipleThreads() {
        NUM_OF_THREADS = 5;
        NUM_OF_QUERIES = 200;

        doPerformanceTesting();
    }
}