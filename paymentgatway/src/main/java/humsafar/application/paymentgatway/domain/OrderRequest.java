package humsafar.application.paymentgatway.domain;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;
@Data
@Document
@NoArgsConstructor
@AllArgsConstructor

    public class OrderRequest {
        @NonNull
        private String customerName;
        @NonNull
        private String email;
        @NonNull
        private String phoneNumber;
        @NonNull
        private BigInteger amount;


    }

