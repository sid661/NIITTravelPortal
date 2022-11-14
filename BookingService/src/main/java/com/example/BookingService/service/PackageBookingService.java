package com.example.BookingService.service;


import com.example.BookingService.model.PackageModel;

import java.util.List;

public interface PackageBookingService
{
   PackageModel bookPackage(PackageModel packageModel);
   List<PackageModel> getAllPackageBooking(String userEmailId);
   PackageModel cancelbooking(String bookingId);
   List<PackageModel> getallBookings();
}
