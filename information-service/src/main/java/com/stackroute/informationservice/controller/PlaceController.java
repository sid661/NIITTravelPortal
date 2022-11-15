package com.stackroute.informationservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.stackroute.informationservice.domain.Place;
import com.stackroute.informationservice.domain.Restaurant;
import com.stackroute.informationservice.exception.PlaceAlreadyExists;
import com.stackroute.informationservice.exception.PlaceNotFoundException;
import com.stackroute.informationservice.exception.RestaurantNotFoundException;
import com.stackroute.informationservice.repositiory.PlaceRepository;
import com.stackroute.informationservice.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/information")
public class PlaceController {

    @Autowired
    PlaceService placeService;
    private ResponseEntity<?> responseEntity;
    @Autowired
    PlaceRepository repository;

    @PostMapping("/savePlace")
    public ResponseEntity<?> registerUser(@RequestParam("file") MultipartFile file, @RequestParam("details") String details)throws PlaceAlreadyExists {
        try{
            Place place=new ObjectMapper().readValue(details,Place.class);
            responseEntity = new ResponseEntity<>(placeService.savePlace(place,file.getBytes()), HttpStatus.CREATED);
        }

        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("/findPlaces/{city}")
    public ResponseEntity<?> findPlaces(@PathVariable String city)   {

        return new ResponseEntity<>(placeService.findAllPlacesInCity(city),HttpStatus.OK);
    }

//    @DeleteMapping("deleteplace/{place}")
//    public ResponseEntity<?> deletePlace(@PathVariable String place) throws PlaceNotFoundException
//    {
//        try
//        {
//            responseEntity=new ResponseEntity<>(placeService.deletePlace(place),HttpStatus.GONE);
//        }
//        catch (PlaceNotFoundException placeNotFoundException)
//        {
//            responseEntity=new ResponseEntity<>(placeNotFoundException,HttpStatus.NOT_FOUND);
//        }
//        catch (Exception e)
//        {
//            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
//        }
//        return responseEntity;
//    }
//    @GetMapping("getplace/{place}")
//    public ResponseEntity<?> getPlaceByName(@PathVariable String place) throws PlaceNotFoundException
//    {
//        try
//        {
//            responseEntity=new ResponseEntity<>(placeService.getPlaceByPlace(place),HttpStatus.OK);
//        }
//        catch (PlaceNotFoundException placeNotFoundException)
//        {
//            responseEntity=new ResponseEntity<>(placeNotFoundException,HttpStatus.NOT_FOUND);
//        }
//        catch (Exception e)
//        {
//            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
//        }
//        return responseEntity;
//
//    }
//    @PutMapping("updatePlaceDetails/{place}")
//    public ResponseEntity<?> updatePlaceDetails(@RequestBody Place place1, @PathVariable String place) throws PlaceNotFoundException
//
//    {
//        try
//        {
//            responseEntity=new ResponseEntity<>(placeService.updateExistingPlace(place1,place),HttpStatus.OK);
//        }
//        catch (PlaceNotFoundException placeNotFoundException)
//        {
//            System.out.println("Place Not Found");
//            responseEntity=new ResponseEntity<>(placeNotFoundException,HttpStatus.NOT_FOUND);
//        }
//        catch (Exception e)
//        {
//
//            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
//        }
//        return responseEntity;
//    }
    @GetMapping("/allplaces")
    public ResponseEntity<?> getallplaces()
    {
       return new ResponseEntity(placeService.getAllplaces(),HttpStatus.OK);
    }

}
