package com.example.BookingService.repository;

import com.example.BookingService.model.PackageModel;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PackageRepository extends MongoRepository<PackageModel,String>
{
    PackageModel findByBookingId(String booklingId);
    List<PackageModel> findByUserEmailId(String userEmailId);
}
