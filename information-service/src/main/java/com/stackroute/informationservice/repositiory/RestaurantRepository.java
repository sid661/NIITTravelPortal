package com.stackroute.informationservice.repositiory;


import com.stackroute.informationservice.domain.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RestaurantRepository extends MongoRepository<Restaurant,String> {
    List<Restaurant> findByCity(String city);
     Restaurant findByRestaurantName(String restaurantName);
}
