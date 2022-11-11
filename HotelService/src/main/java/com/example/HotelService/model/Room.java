package com.example.HotelService.model;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Room
{

    private int roomid;
    private String roomtype;//drop down
    private int noOfBeds;//drop down
    private byte[] images;//upload
    private int price;//input
    //private int roomavailable;//input field
    private int totalNoOfRoom;//input field
    private Reservation reservation;




}
