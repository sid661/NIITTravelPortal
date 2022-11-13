package humsafar.application.paymentgatway.repository;

import humsafar.application.paymentgatway.domain.OrderRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PaymentDetails extends MongoRepository<OrderRequest,String > {
     List<OrderRequest> findByEmail(String email);
}
