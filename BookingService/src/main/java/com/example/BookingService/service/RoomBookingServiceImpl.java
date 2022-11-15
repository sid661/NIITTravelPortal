package com.example.BookingService.service;

import com.example.BookingService.model.Reservation;
import com.example.BookingService.model.RoomModel;
import com.example.BookingService.proxy.RoomProxy;
import com.example.BookingService.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomBookingServiceImpl implements RoomBookingService
{
private RoomRepository roomRepository;
private RoomProxy roomProxy;

    @Autowired
    public RoomBookingServiceImpl(RoomRepository roomRepository, RoomProxy roomProxy) {
        this.roomRepository = roomRepository;
        this.roomProxy = roomProxy;
    }

    @Override
    public RoomModel bookRoom(RoomModel roomModel)
    {
        Reservation reservation=new Reservation();
        reservation.setStartDate(roomModel.getStartDate());
        reservation.setEndDate(roomModel.getEndDate());
        System.out.println(reservation);

        ResponseEntity<?> response=roomProxy.saveReservation(reservation,roomModel.getHotelName(),roomModel.getRoomid());
        if(response.getStatusCodeValue()==200)
        {
            return roomRepository.save(roomModel);
        }
        else
        {
            System.out.println("Some Error");
            return null;
        }


    }

    @Override
    public List<RoomModel> getAllRoomBooking(String userEmailId) {
        return roomRepository.findByUserEmailId(userEmailId);
    }

    @Override
    public RoomModel cancelBooking(String bookingId)
    {
        RoomModel roomModel=roomRepository.findByBookingId(bookingId);
        Reservation reservation=new Reservation();
        ResponseEntity<?> response=roomProxy.saveReservation(reservation,roomModel.getHotelName(),roomModel.getRoomid());
        if(response.getStatusCodeValue()==200)
        {
           roomRepository.delete(roomModel);
           return roomModel;
        }
        else
        {
            System.out.println("Some Error");
            return null;
        }

    }

    @Override
    public List<RoomModel> getallBookings() {
        return roomRepository.findAll();
    }
}
