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
    private String rating;
    private String username;
    private Date date;
    private String description;


}
