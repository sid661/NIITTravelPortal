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

public class CabModel
{
    @Id
    private String bookingId;
    private String razorpayOrderId;
    private String userEmailId;
    private String firstName;
    private String lastName;
    private long phoneNumber;
    private String serviceProviderEmailId;
    private String cabType;
    private String cabmodel;
    private String registrationNo;
    private String startPoint;
    private String endPoint;
    private String pickUpTime;
    private String startDate;
    private String endDate;
    private String   tourType;

    private  int pricePerKm;
}
