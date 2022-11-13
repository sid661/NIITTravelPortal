package humsafar.application.paymentgatway.service;

import humsafar.application.paymentgatway.domain.OrderRequest;
import humsafar.application.paymentgatway.repository.PaymentDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PaymentGatwayImpl implements PaymentGatwayService {
    @Autowired
    private PaymentDetails paymentDetails;



    @Override
    public OrderRequest saveDetail(OrderRequest orderRequest) {
        return paymentDetails.save(orderRequest);
    }

    @Override
    public List<OrderRequest> getPaymentDetail(String email) {
        return paymentDetails.findByEmail(email);
    }
}
