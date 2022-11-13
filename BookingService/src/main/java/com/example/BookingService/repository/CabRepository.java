package com.example.BookingService.repository;

import com.example.BookingService.model.CabModel;
;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CabRepository  extends MongoRepository<CabModel,String>
{
   CabModel findByBookingId(String bookingId);
    List<CabModel> findByUserEmailId(String userEmailId);
}
