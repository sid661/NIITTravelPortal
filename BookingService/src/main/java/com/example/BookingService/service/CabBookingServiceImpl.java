package com.example.BookingService.service;

import com.example.BookingService.model.CabModel;
import com.example.BookingService.repository.CabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CabBookingServiceImpl implements CabBookingService
{
private CabRepository cabRepository;
@Autowired
    public CabBookingServiceImpl(CabRepository cabRepository) {
        this.cabRepository = cabRepository;
    }

    @Override
    public CabModel bookCab(CabModel cabModel)
    {
        return cabRepository.save(cabModel);
    }

    @Override
    public List<CabModel> getAllCabBooking(String userEmailId) {
        return cabRepository.findByUserEmailId(userEmailId);
    }

    @Override
    public CabModel cancelBooking(String bookingId)
    {
        CabModel cabModel=cabRepository.findByBookingId(bookingId);
        cabRepository.delete(cabModel);
        return  cabModel;

    }

    @Override
    public List<CabModel> getallBookings() {
        return cabRepository.findAll();
    }
}
