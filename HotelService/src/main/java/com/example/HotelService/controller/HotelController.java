package com.example.HotelService.controller;

import com.example.HotelService.exception.HotelAlreadyExistsException;
import com.example.HotelService.exception.HotelNotFoundException;
import com.example.HotelService.model.*;
import com.example.HotelService.repository.HotelRepository;

import com.example.HotelService.exception.RoomNotFoundException;


import com.example.HotelService.service.HotelService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;



@RestController
@RequestMapping("/hotel/")
public class HotelController
{
    private ResponseEntity responseEntity;
    private HotelService hotelService;

    @Autowired
    HotelRepository hotelRep;

    @Autowired
    public HotelController(HotelService hotelService)
    {
        this.hotelService = hotelService;
    }

    @PostMapping("registerhotel/{email}")
    public ResponseEntity<?> saveHotelDetails(@RequestParam("file") MultipartFile file, @RequestParam("details") String details,@PathVariable String email) throws HotelAlreadyExistsException
    {
        try
        {
//            Hotel hotel=gson.fromJson(details,Hotel.class);
            //Hotel hotel=new Hotel();
            Hotel hotel=new ObjectMapper().readValue(details,Hotel.class);

            responseEntity = new ResponseEntity<>(hotelService.registerHotelDetails(hotel,email,file.getBytes()), HttpStatus.OK);

            ;
        }
        catch (HotelAlreadyExistsException hotelAlreadyExistsException)
        {
            responseEntity=new ResponseEntity<>(hotelAlreadyExistsException,HttpStatus.CONFLICT);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            responseEntity=new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("/search/{hotelName}")
    public ResponseEntity<?> findRestaurant(@PathVariable String hotelName, Principal principal) {
        List<Hotel> myList = hotelRep.findByHotelNameContaining(hotelName);
        return responseEntity = new ResponseEntity(myList, HttpStatus.OK);
    }
        @GetMapping("hotelbycity/{city}")
    public ResponseEntity<?>  getHotelsByCity(@PathVariable String city)
    {
        try
        {
            System.out.println("city "+city);
            System.out.println(hotelService.getHotelByCityName(city));
            responseEntity=new ResponseEntity<>(hotelService.getHotelByCityName(city),HttpStatus.OK);
        }

        catch (Exception e)
        {
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
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
        System.out.println("hello"+hotelName);
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
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;

    }
    @PutMapping("updatehotel/{hotelName}/{email}")
    public ResponseEntity<?> updateHotel(@RequestBody Hotel hotel,@PathVariable String hotelName,@PathVariable String email) throws HotelNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.updateHotelDetails(hotelName,email,hotel),HttpStatus.OK);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            System.out.println("Not found the Hotel");
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            System.out.println("pROBLEM");
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @PostMapping("addreview/{hotelName}")
    public ResponseEntity<?> addReview(@RequestBody Review review,@PathVariable String hotelName) throws HotelNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.addReview(hotelName,review),HttpStatus.OK);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            System.out.println("Not found the Hotel");
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            System.out.println("pROBLEM");
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;

    }
    @PutMapping("updatehoteldetails/{hotelName}")
    public ResponseEntity<?> updateHotelDetails(@RequestBody Hotel hotel,@PathVariable String hotelName) throws HotelNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.updateExistingHotel(hotel,hotelName),HttpStatus.OK);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            System.out.println("Not found the Hotel");
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            System.out.println("pROBLEM");
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @PostMapping("addroom/{hotelName}")
    public ResponseEntity<?> addRoom(@RequestParam("file") MultipartFile file, @RequestParam("details") String details,@PathVariable String hotelName) throws HotelNotFoundException
    {
        try
        {
            Room room=new ObjectMapper().readValue(details,Room.class);
            responseEntity = new ResponseEntity<>(hotelService.addRoom(hotelName,room,file.getBytes()), HttpStatus.CREATED);
            ;
        }


        catch (HotelNotFoundException hotelNotFoundException)
        {
            System.out.println("Not found the Hotel");
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            System.out.println("pROBLEM");
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }

    @GetMapping("findByReview/{review}")
    ResponseEntity<Hotel> findByReview(@PathVariable int review){
        return responseEntity = new ResponseEntity<>(hotelService.findByReviewRating(review),HttpStatus.OK);
    }
    @GetMapping("findByPrice/{price}")
    ResponseEntity<Hotel> findByprice(@PathVariable int price){
        return responseEntity = new ResponseEntity<>(hotelService.findByRoomPrice(price),HttpStatus.OK);
    }

    @GetMapping("filter")
    ResponseEntity<Hotel> filter(@RequestBody FilterData filterData) {
        return responseEntity = new ResponseEntity(hotelService.findByHotelCategoryAndRoomPriceAndReviewRating
                (filterData.getHotelCategory(), filterData.getPrice(), filterData.getRating()), HttpStatus.OK);
    }


    @PostMapping("makereservation/{hotelName}/{roomid}")
    ResponseEntity<?> makeReservation(@RequestBody Reservation reservation,@PathVariable String hotelName,@PathVariable int roomid) throws HotelNotFoundException, RoomNotFoundException
    {
        try
        {
          return  responseEntity=new ResponseEntity(hotelService.makeReservation(hotelName,roomid,reservation),HttpStatus.OK);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            System.out.println("Not found the Hotel");
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (RoomNotFoundException roomNotFoundException)
        {
            System.out.println("Not found the Room");
            responseEntity=new ResponseEntity<>(roomNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("getallrooms/{hotelName}")
    public ResponseEntity<?> getAllRooms(@PathVariable String hotelName) throws HotelNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(hotelService.getAllRooms(hotelName),HttpStatus.OK);
        }
        catch (HotelNotFoundException hotelNotFoundException)
        {
            System.out.println("Not found the Hotel");
            responseEntity=new ResponseEntity<>(hotelNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            System.out.println(e);
            responseEntity=new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;


    }

}
