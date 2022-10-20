package com.stackroute.cabservice.service;

import com.stackroute.cabservice.domain.Cab;

import java.util.List;

public interface CabService {
    Cab saveCab(Cab cab);

    List<Cab> findCabByCity(String city);

    List<Cab>  findAllByCabType(String[] cabType);


}
