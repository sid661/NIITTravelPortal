package humsafar.application.paymentgatway.service;

import humsafar.application.paymentgatway.domain.OrderRequest;

import java.util.List;

public interface PaymentGatwayService {
    OrderRequest saveDetail(OrderRequest orderRequest);
    List<OrderRequest> getPaymentDetail(String email);
}
