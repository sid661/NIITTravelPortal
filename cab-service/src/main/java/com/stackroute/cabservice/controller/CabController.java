package com.stackroute.cabservice.controller;

import com.stackroute.cabservice.domain.Cab;
import com.stackroute.cabservice.service.CabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cab/")
public class CabController {
    @Autowired
    private CabService service;
    private ResponseEntity responseEntity;
    @PostMapping("save")
    public ResponseEntity<?> saveCab(@RequestBody Cab cab)
    {
        return new ResponseEntity<>(service.saveCab(cab), HttpStatus.OK);
    }

    @GetMapping("findCab/{city}")
    public ResponseEntity<?> findcab(@PathVariable String city)
    {
        return new ResponseEntity<>(service.findCabByCity(city),HttpStatus.OK);
    }

    @GetMapping("findCab/cabType")
    public ResponseEntity<?> findCabByCabType(@RequestParam("data") String cabType)
    {
        System.out.println("hi");
        String[] cabArray=cabType.split(",");
        for(int i=0;i<cabArray.length;i++)
        {
            System.out.println(cabArray[i]);
        }
        System.out.println(cabArray.length);
        for (int i = 0; i <cabArray.length ; i++) {
            System.out.println(cabArray[i]);

        }
        return new ResponseEntity<>(service.findAllByCabType(cabArray),HttpStatus.OK);
    }



}
