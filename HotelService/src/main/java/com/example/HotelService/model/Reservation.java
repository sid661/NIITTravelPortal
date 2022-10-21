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
    private Date startDate;
    private Date endDate;
    private int roomId;
    private int guestId;
    private int price;




}
