package com.example.BookingService.service;

;
import com.example.BookingService.model.RoomModel;

import java.util.List;

public interface RoomBookingService
{
RoomModel bookRoom(RoomModel roomModel);
List<RoomModel> getAllRoomBooking(String userEmailId);
RoomModel cancelBooking(String bookingId);
List<RoomModel> getallBookings();
}
