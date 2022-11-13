package com.example.BookingService.repository;

import com.example.BookingService.model.RoomModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RoomRepository extends MongoRepository<RoomModel,String>
{
    RoomModel findByBookingId(String bookingId);
List<RoomModel> findByUserEmailId(String userEmailId);

}
