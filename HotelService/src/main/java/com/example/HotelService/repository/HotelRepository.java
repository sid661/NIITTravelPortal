package com.example.HotelService.repository;

import com.example.HotelService.model.Hotel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HotelRepository extends MongoRepository<Hotel,String>
{
    public List<Hotel> findByEmail(String email);
    public Hotel findByHotelName(String hotelName);

}
