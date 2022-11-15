package com.example.BookingService.service;

import com.example.BookingService.model.PackageModel;
import com.example.BookingService.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageBookingServiceImpl implements PackageBookingService
{

private PackageRepository packageRepository;
@Autowired
    public PackageBookingServiceImpl(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
    }

    @Override
    public PackageModel bookPackage(PackageModel packageModel)
    {
        return packageRepository.save(packageModel);
    }

    @Override
    public List<PackageModel> getAllPackageBooking(String userEmailId) {
        return packageRepository.findByUserEmailId(userEmailId);
    }

    @Override
    public PackageModel cancelbooking(String bookingId) {
        PackageModel packageModel=packageRepository.findByBookingId(bookingId);
        packageRepository.delete(packageModel);
        return packageModel;
    }

    @Override
    public List<PackageModel> getallBookings() {
        return packageRepository.findAll();
    }
}
