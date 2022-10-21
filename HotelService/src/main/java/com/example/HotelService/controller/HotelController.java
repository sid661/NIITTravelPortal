package com.example.HotelService.controller;

import com.example.HotelService.exception.HotelAlreadyExistsException;
import com.example.HotelService.exception.HotelNotFoundException;
import com.example.HotelService.model.Hotel;
import com.example.HotelService.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/hotelservice/")
public class HotelController
{
    private ResponseEntity responseEntity;
    private HotelService hotelService;

    @Autowired
    public HotelController(HotelService hotelService)
    {
        this.hotelService = hotelService;
    }
    @PostMapping("registerhotel/{email}")
    public ResponseEntity<?> saveHotel(@RequestBody Hotel hotel,@PathVariable String email) throws HotelAlreadyExistsException
    {
        try
        {
            hotelService.registerHotel(hotel,email);
            responseEntity=new ResponseEntity<>(hotel, HttpStatus.CREATED);
        }
        catch (HotelAlreadyExistsException hotelAlreadyExistsException)
        {
            responseEntity=new ResponseEntity<>(hotelAlreadyExistsException,HttpStatus.CONFLICT);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("allhotels")
    public ResponseEntity<?> getALlUsers()
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.getAllHotel(),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>("Error try Again",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("gethotels/{email}")
    public ResponseEntity<?> getHotelDetailsOfSingleUser(@PathVariable String email) throws HotelNotFoundException
    {
        try
        {
            responseEntity = new ResponseEntity<>(hotelService.getHotelsByEmail(email), HttpStatus.OK);

        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @DeleteMapping("deletehotel/{hotelName}")
    public ResponseEntity<?> deleteHotel(@PathVariable String hotelName) throws HotelNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.deleteHotel(hotelName),HttpStatus.GONE);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @GetMapping("gethotelbyname/{hotelName}")
    public ResponseEntity<?> gethotelByName(@PathVariable String hotelName) throws HotelNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.getHotelByHotelName(hotelName),HttpStatus.OK);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;

    }

}
