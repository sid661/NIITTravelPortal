package com.example.HotelService.model;

import lombok.*;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Review
{
    private  String subject;
    private int rating;
    private String username;
    private String date;
    private String description;


}
