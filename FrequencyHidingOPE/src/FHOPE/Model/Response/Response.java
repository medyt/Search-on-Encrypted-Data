package FHOPE.Model.Response;

public class Response {
    public MessageHandler createResponse() {
        if (1 == 1) {
            return new ErrorHandler();
        }
        else {
            return new SuccessHandler();
        }
    }
}
