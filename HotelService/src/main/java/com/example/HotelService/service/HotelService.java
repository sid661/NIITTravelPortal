package com.example.HotelService.service;

import com.example.HotelService.exception.HotelAlreadyExistsException;
import com.example.HotelService.exception.HotelNotFoundException;
import com.example.HotelService.exception.RoomNotFoundException;

import com.example.HotelService.model.Hotel;
import com.example.HotelService.model.Reservation;
import com.example.HotelService.model.Review;
import com.example.HotelService.model.Room;


import java.util.List;

public interface HotelService
{
    Hotel registerHotel(Hotel hotel,String email) throws HotelAlreadyExistsException;
    Hotel registerHotelDetails(Hotel hotel,String email,byte[] overviewimage) throws HotelAlreadyExistsException;
    List<Hotel> getAllHotel();
    List<Hotel> getHotelsByEmail(String email) throws HotelNotFoundException;
    Hotel deleteHotel(String hotelName) throws HotelNotFoundException;
    Hotel getHotelByHotelName(String hotelName) throws HotelNotFoundException;
    Hotel updateHotelDetails(String hotelName,String email,Hotel hotel) throws HotelNotFoundException;
    Hotel addReview(String hotelName, Review review) throws HotelNotFoundException;
    Hotel updateExistingHotel(Hotel hotel,String hotelName) throws HotelNotFoundException;
    Hotel addRoom(String hotelName, Room room,byte[] roomimage) throws HotelNotFoundException;
    List<Hotel> getHotelByCityName(String city) throws HotelNotFoundException;

    List<Hotel> findByAddressCity(String cityName);
    List<Hotel> findByReviewRating(int rating);
    List<Hotel> findByRoomPrice(int price);

    List<Hotel> findByHotelCategoryAndRoomPriceAndReviewRating(String category,int price,int rating);
    List<Hotel> findByRoomPriceAndReviewRating(int price,int rating);
    List<Hotel> findByHotelCategoryAndReviewRating(String category,int rating);
    List<Hotel> findByHotelCategoryAndRoomPrice(String category,int price);

    Room makeReservation(String hotelName, int roomid, Reservation reservation) throws HotelNotFoundException, RoomNotFoundException;



    List<Room> getAllRooms(String hotelName) throws HotelNotFoundException;

}
