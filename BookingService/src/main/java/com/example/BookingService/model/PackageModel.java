package com.example.BookingService.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@NonNull
public class PackageModel
{
    @Id
    private String bookingId;
    private String razorpayOrderId;
    private String userEmailId;
    private String firstName;
    private String lastName;
    private long phoneNumber;
    private String serviceProviderEmailId;
    private String tourGuide;
    private String agencyName;
    private String destination;
    private List<String> citiesAddedInPackage;
    private String pickPoint;
    private String dropPoint;
    private List<String> transferHotel;
    private int noOfTravellers;
    private int noOfNights;
    private double costPerPerson;
    private String food;
    private String tourType;
    private List <String> activities;
    private List <String> placesToVisit;
    private List<String> transport;
    private double totalCost;
}
