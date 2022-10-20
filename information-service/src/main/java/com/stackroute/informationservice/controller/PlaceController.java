package com.stackroute.informationservice.controller;

import com.google.gson.Gson;
import com.stackroute.informationservice.domain.Place;
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
    public ResponseEntity<?> registerUser(@RequestParam("file") MultipartFile file, @RequestParam("details") String details)  {
        try{
            Place place=gson.fromJson(details,Place.class);
            responseEntity = new ResponseEntity<>(placeService.savePlace(place,file.getBytes()), HttpStatus.CREATED);
        }
        catch (IOException e) {
            throw new RuntimeException(e);
        }
        return responseEntity;
    }

    @GetMapping("/findPlaces/{city}")
    public ResponseEntity<?> findPlaces(@PathVariable String city)   {

        return new ResponseEntity<>(placeService.findAllPlacesInCity(city),HttpStatus.OK);
    }



}
