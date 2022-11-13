package com.example.BookingService.controller;

import com.example.BookingService.model.CabModel;
import com.example.BookingService.model.PackageModel;
import com.example.BookingService.model.RoomModel;
import com.example.BookingService.service.CabBookingService;
import com.example.BookingService.service.PackageBookingService;
import com.example.BookingService.service.RoomBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book/")
public class BookingController {
    private ResponseEntity responseEntity;
    private CabBookingService cabBookingService;
    private PackageBookingService packageBookingService;
    private RoomBookingService roomBookingService;
@Autowired
    public BookingController(CabBookingService cabBookingService, PackageBookingService packageBookingService, RoomBookingService roomBookingService) {
        this.cabBookingService = cabBookingService;
        this.packageBookingService = packageBookingService;
        this.roomBookingService = roomBookingService;
    }
   @PostMapping("booking/hotel")
    public ResponseEntity<?> saveBooking(@RequestBody RoomModel roomModel)
    {
        try
        {
            RoomModel r=roomModel;
            r.setBookingId("1");
            System.out.println(roomModel);
            responseEntity=new ResponseEntity(roomBookingService.bookRoom(r),HttpStatus.OK);
        }
        catch (Exception e)
        {
            System.out.println(e);
            responseEntity=new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      return responseEntity;
    }
  @PostMapping("booking/cab")
    public ResponseEntity<?> saveBooking(@RequestBody CabModel cabModel) {
        try
        {
            responseEntity=new ResponseEntity(cabBookingService.bookCab(cabModel),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;

    }
    @PostMapping("booking/package")
    public ResponseEntity<?> saveBooking(@RequestBody PackageModel packageModel)
    {
        try
        {
            responseEntity=new ResponseEntity(packageBookingService.bookPackage(packageModel),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("getcabbookings/{userEmailId}")
    public ResponseEntity<?>  getCAbBookings(@PathVariable String userEmailId)
    {
        try
        {
           responseEntity=new ResponseEntity(cabBookingService.getAllCabBooking(userEmailId),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("getpackagebookings/{userEmailId}")
    public ResponseEntity<?>  getpackageBookings(@PathVariable String userEmailId)
    {
        try
        {
            responseEntity=new ResponseEntity(packageBookingService.getAllPackageBooking(userEmailId),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("getroombookings/{userEmailId}")
    public ResponseEntity<?>  getroomBookings(@PathVariable String userEmailId)
    {
        try
        {
            responseEntity=new ResponseEntity(roomBookingService.getAllRoomBooking(userEmailId),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @DeleteMapping("cancelbookingroom/{bookingId}")
    public ResponseEntity<?> cancelBooking(@PathVariable String bookingId)
    {
        try
        {
            responseEntity=new ResponseEntity((roomBookingService.cancelBooking(bookingId)),HttpStatus.OK);
        }
        catch(Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @DeleteMapping("cancelbookingcab/{bookingId}")
    public ResponseEntity<?> cancelBookingCab(@PathVariable String bookingId)
    {
        try
        {
            responseEntity=new ResponseEntity((cabBookingService.cancelBooking(bookingId)),HttpStatus.OK);
        }
        catch(Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @DeleteMapping("cancelbookingpackage/{bookingId}")
    public ResponseEntity<?> cancelBookingPackage(@PathVariable String bookingId)
    {
        try
        {
            responseEntity=new ResponseEntity((packageBookingService.cancelbooking(bookingId)),HttpStatus.OK);
        }
        catch(Exception e) {
            responseEntity = new ResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }




}
