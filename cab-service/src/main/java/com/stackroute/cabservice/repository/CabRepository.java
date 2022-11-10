package com.stackroute.cabservice.repository;

import com.stackroute.cabservice.domain.Cab;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface CabRepository  extends MongoRepository<Cab,String> {

    List<Cab> findAllByCity(String city);
    List<Cab>  findAllByCabType(String cabType);

    Cab findByCabType(String cabType);
    Cab findByFuelType(String fuelType);

}
