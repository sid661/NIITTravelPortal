package humsafar.application.paymentgatway.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    @NonNull
    private  String secretKey;
    @NonNull
    private String razorpayOrderId;
    @NonNull
    private  String applicationFee;
    @NonNull
    private String secretId;
    @NonNull
    private  String pgName;

}
