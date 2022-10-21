package com.example.HotelService.service;

import com.example.HotelService.config.Producer;
import com.example.HotelService.exception.HotelAlreadyExistsException;
import com.example.HotelService.exception.HotelNotFoundException;
import com.example.HotelService.model.Hotel;
import com.example.HotelService.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HotelServiceImpl implements HotelService
{
    @Autowired
    private Producer producer;
    private HotelRepository hotelRepository;
   @Autowired
    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Hotel registerHotel(Hotel hotel,String email) throws HotelAlreadyExistsException
    {
        if(hotelRepository.findById(hotel.getHotelName()).isPresent())
        {
            throw new HotelAlreadyExistsException();
        }
        else
        {
            hotel.setEmail(email);
            hotelRepository.save(hotel);
            producer.sendMessageToRabbitMqServer(hotel);
            return hotel;
        }
    }

    @Override
    public List<Hotel> getAllHotel()
    {
        return hotelRepository.findAll();
    }

    @Override
    public List<Hotel> getHotelsByEmail(String email) throws HotelNotFoundException
    {
        if(hotelRepository.findByEmail(email)==null)
        {
            throw new HotelNotFoundException();
        }
        else
        {
            return hotelRepository.findByEmail(email);
        }
    }

    @Override
    public Hotel deleteHotel(String hotelName) throws HotelNotFoundException
    {
        if(hotelRepository.findById(hotelName).isEmpty())
        {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        }
        else
        {
            Hotel hotel = hotelRepository.findByHotelName(hotelName);
            hotelRepository.delete(hotel);
            return hotel;
        }

    }

    @Override
    public Hotel getHotelByHotelName(String hotelName) throws HotelNotFoundException
    {
        if(hotelRepository.findById(hotelName).isEmpty())
        {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        }
        else
        {
            Hotel hotel=hotelRepository.findByHotelName(hotelName);
            return hotel;
        }
    }

    @Override
    public Hotel updateHotelDetails(String hotelName) throws HotelNotFoundException
    {
        return null;
    }
}
