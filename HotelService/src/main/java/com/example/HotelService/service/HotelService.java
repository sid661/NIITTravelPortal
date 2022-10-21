package com.example.HotelService.service;

import com.example.HotelService.exception.HotelAlreadyExistsException;
import com.example.HotelService.exception.HotelNotFoundException;
import com.example.HotelService.model.Hotel;

import java.util.List;

public interface HotelService
{
    public Hotel registerHotel(Hotel hotel,String email) throws HotelAlreadyExistsException;
    public List<Hotel> getAllHotel();
    public List<Hotel> getHotelsByEmail(String email) throws HotelNotFoundException;
    public  Hotel deleteHotel(String hotelName) throws HotelNotFoundException;
    public Hotel getHotelByHotelName(String hotelName) throws HotelNotFoundException;
    public Hotel updateHotelDetails(String hotelName) throws HotelNotFoundException;

}
