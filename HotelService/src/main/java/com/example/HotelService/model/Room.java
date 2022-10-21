package com.example.HotelService.model;

import lombok.*;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Room
{
    private String roomtype;
    private int noOfBeds;
    private List<String> images;
    private int price;
    private String roomavailable;
  //  private int totalNoOfRoom;



}
