package com.stackroute.cabservice.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Cab {

    private String cabType,model,fuelType;
    private   int pricePerKm;
   private boolean permit;
    String city;
    @Id
    private String registrationNo;



}
