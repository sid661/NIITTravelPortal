package com.example.HotelService.model;

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
public class Hotel
{
    @Id
private String hotelName;///
private String hotelCategory;//
private String email;
private List<String> propertyRules;
private Overview overview;
private Amenities amenities;
private Address address;
private List<Room> room;
private List<Review> review;


}
