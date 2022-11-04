package com.example.HotelService.model;

import lombok.*;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Reservation
{
    private String startDate;
    private String endDate;
    private int roomId;
    private int guestId;
    private int price;




}
