package com.stackroute.informationservice.controller;

import com.google.gson.Gson;
import com.stackroute.informationservice.domain.Place;
import com.stackroute.informationservice.exception.PlaceAlreadyExists;
import com.stackroute.informationservice.exception.PlaceNotFoundException;
import com.stackroute.informationservice.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin
public class PlaceController {

    @Autowired
    PlaceService placeService;
    private ResponseEntity<?> responseEntity;

    Gson gson=new Gson();
    @PostMapping("/savePlace")
    public ResponseEntity<?> registerUser(@RequestParam("file") MultipartFile file, @RequestParam("details") String details)throws PlaceAlreadyExists {
        try{
            Place place=gson.fromJson(details,Place.class);
            responseEntity = new ResponseEntity<>(placeService.savePlace(place,file.getBytes()), HttpStatus.CREATED);
        }
        catch (PlaceAlreadyExists placeAlreadyExists)
        {
            responseEntity=new ResponseEntity<>(placeAlreadyExists,HttpStatus.CONFLICT);
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

    @DeleteMapping("deleteplace/{place}")
    public ResponseEntity<?> deletePlace(@PathVariable String place) throws PlaceNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(placeService.deletePlace(place),HttpStatus.GONE);
        }
        catch (PlaceNotFoundException placeNotFoundException)
        {
            responseEntity=new ResponseEntity<>(placeNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @GetMapping("getplace/{place}")
    public ResponseEntity<?> getPlaceByName(@PathVariable String place) throws PlaceNotFoundException
    {
        try
        {
            responseEntity=new ResponseEntity<>(placeService.getPlaceByPlace(place),HttpStatus.OK);
        }
        catch (PlaceNotFoundException placeNotFoundException)
        {
            responseEntity=new ResponseEntity<>(placeNotFoundException,HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
        return responseEntity;

    }

}
