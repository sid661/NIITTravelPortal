package com.example.BookingService.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@NonNull
public class CabModel
{
    @Id
    private String bookingId;
    private String transactionid;
    private String userEmailId;
    private String firstName;
    private String lastName;
    private int phoneNumber;
    private String serviceProviderEmailId;
    private String cabType;
    private String cabmodel;
    private String registrationNo;
    private String startPoint;
    private String endPoint;
    private String pickUpTime;
}
