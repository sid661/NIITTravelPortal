package com.stackroute.informationservice.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;


import com.stackroute.informationservice.domain.Restaurant;
import com.stackroute.informationservice.exception.RestaurantAlreadyExists;
import com.stackroute.informationservice.exception.RestaurantNotFoundException;

import com.stackroute.informationservice.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/information")

public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;
    private ResponseEntity<?> responseEntity;


    @PostMapping("/saveRestaurant")
    public ResponseEntity<?> registerUser(@RequestParam("file") MultipartFile file, @RequestParam("details") String details)  {
        try{
            Restaurant restaurant =new ObjectMapper().readValue(details,Restaurant.class);
            responseEntity = new ResponseEntity<>(restaurantService.saveRestaurant(restaurant,file.getBytes()), HttpStatus.CREATED);
        }
        catch (RestaurantAlreadyExists restaurantAlreadyExists)
        {
            responseEntity=new ResponseEntity<>(restaurantAlreadyExists,HttpStatus.CONFLICT);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("/findRestaurants/{city}")
    public ResponseEntity<?> findRestaurants(@PathVariable String city)   {

        return new ResponseEntity<>(restaurantService.findAllRestaurantsInCity(city),HttpStatus.OK);
    }
    @DeleteMapping("deleteRestaurant/{restaurantName}")
    public ResponseEntity<?> deleteRestaurant(@PathVariable String restaurantName) throws RestaurantNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(restaurantService.deleteRestaurant(restaurantName),HttpStatus.GONE);
        }
        catch (RestaurantNotFoundException restaurantNotFoundException)
        {
            responseEntity=new ResponseEntity<>(restaurantNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @GetMapping("getRestaurantByName/{restaurantName}")
    public ResponseEntity<?> getRestaurantByName(@PathVariable String restaurantName) throws RestaurantNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(restaurantService.getRestaurantByRestaurantName(restaurantName),HttpStatus.OK);
        }
        catch (RestaurantNotFoundException restaurantNotFoundException)
        {
            responseEntity=new ResponseEntity<>(restaurantNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;

    }
    @PutMapping("updateRestaurantDetails/{restaurantName}")
    public ResponseEntity<?> updateRestaurantDetails(@RequestBody Restaurant restaurant,@PathVariable String restaurantName) throws RestaurantNotFoundException

    {
        try
        {
            responseEntity=new ResponseEntity<>(restaurantService.updateExistingRestaurant(restaurant,restaurantName),HttpStatus.OK);
        }
        catch (RestaurantNotFoundException restaurantNotFoundException)
        {
            System.out.println("Restaurant Not Found");
            responseEntity=new ResponseEntity<>(restaurantNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {

            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
}
