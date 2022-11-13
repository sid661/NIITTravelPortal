package humsafar.application.paymentgatway.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import humsafar.application.paymentgatway.domain.OrderRequest;
import humsafar.application.paymentgatway.domain.OrderResponse;
import humsafar.application.paymentgatway.service.PaymentGatwayService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;

@RestController
@RequestMapping("/payment")
public class Controller {

    private PaymentGatwayService paymentGatwayService;
    private ResponseEntity responseEntity;
    @Autowired
    public Controller(PaymentGatwayService paymentGatwayService) {
        this.paymentGatwayService = paymentGatwayService;
    }

    private RazorpayClient client;
    private static final String SECRET_ID1 = "rzp_test_wKyyI6ojoZoeMM";
    private static final String SECRET_KEY1 = "bfYgOf6JA1FIW6ERheXix0JI";
    private static final String SECRET_ID2 = "rzp_test_J4fInjDpTX475d";
    private static final String SECRET_KEY2 = "r8fNXAB78RmsVfdiQbWGwyjr";

    @RequestMapping(path = "/createOrder", method = RequestMethod.POST)
    public OrderResponse createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse response = new OrderResponse();
        try {

            if (orderRequest.getAmount().intValue() > 1) {
                client = new RazorpayClient(SECRET_ID1, SECRET_KEY1);
            } else {
                client = new RazorpayClient(SECRET_ID2, SECRET_KEY2);
            }

            Order order = createRazorPayOrder(orderRequest.getAmount());
            System.out.println("---------------------------------");
            String orderId = (String) order.get("id");
            System.out.println("Order ID: " + orderId);
            System.out.println(orderRequest.getCustomerName());
            System.out.println(orderRequest.getEmail());
            System.out.println(orderRequest.getAmount());
                 paymentGatwayService.saveDetail(orderRequest);
            System.out.println("saved details-");
            response.setRazorpayOrderId(orderId);
            response.setApplicationFee("" + orderRequest.getAmount());
            if (orderRequest.getAmount().intValue() > 1) {
                response.setSecretKey(SECRET_KEY1);
                response.setSecretId(SECRET_ID1);
                response.setPgName("razor1");
            } else {
                response.setSecretKey(SECRET_KEY2);
                response.setSecretId(SECRET_ID2);
                response.setPgName("razor2");
            }

            return response;
        } catch (RazorpayException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return response;

    }

    private Order createRazorPayOrder(BigInteger amount) throws RazorpayException {

        JSONObject options = new JSONObject();
        options.put("amount", amount.multiply(new BigInteger("100")));
        options.put("currency", "INR");
        options.put("receipt", "txn_123456");
        options.put("payment_capture", 1); // You can enable this if you want to do Auto Capture.
        return client.orders.create(options);
    }
    @RequestMapping(path = "/saveOrder", method = RequestMethod.POST)
    public ResponseEntity saveDetail(@RequestBody OrderRequest orderRequest){
        return responseEntity = new ResponseEntity<>(paymentGatwayService.saveDetail(orderRequest), HttpStatus.OK);
    }
    @RequestMapping(path = "/getAll/{email}", method = RequestMethod.GET)
    public ResponseEntity getAllDetail(@PathVariable String email){
        return responseEntity = new ResponseEntity<>(paymentGatwayService.getPaymentDetail(email), HttpStatus.OK);
    }
}

