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
public class RoomModel

{
    @Id
    private String bookingId;
    private String userEmailId;
    private String firstName;
    private String lastName;
    private long phoneNumber;
    private String serviceProviderEmailId;
    private String hotelName;///
    private String hotelAddress;
    private String hotelCategory;//
    private int roomid;
    private String roomtype;//drop down
    private int noOfBeds;//drop down
    private int price;//input
    private String startDate;
    private String endDate;
    private String razorpayOrderId;


}
