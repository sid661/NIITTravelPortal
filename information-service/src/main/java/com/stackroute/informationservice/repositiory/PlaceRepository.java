package com.stackroute.informationservice.repositiory;

import com.stackroute.informationservice.domain.Place;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PlaceRepository extends MongoRepository<Place,String > {

    List<Place> findByCity(String city);
    public Place findByPlace(String Place);
    List<Place> findByCityContaining(String city);
}
