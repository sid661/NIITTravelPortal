package com.example.HotelService.repository;

import com.example.HotelService.model.Hotel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HotelRepository extends MongoRepository<Hotel,String>
{
    List<Hotel> findByEmail(String email);
     Hotel findByHotelName(String hotelName);
    List<Hotel> findByAddressCity(String city);

    List<Hotel> findByReviewRating(int rating);
    List<Hotel> findByRoomPrice(int price);

}
