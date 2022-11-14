package com.example.BookingService.service;

import com.example.BookingService.model.CabModel;

import java.util.List;

public interface CabBookingService
{
   CabModel bookCab(CabModel cabModel);
   List<CabModel> getAllCabBooking(String userEmailId);
   CabModel cancelBooking(String bookingId);
   List<CabModel> getallBookings();

}
