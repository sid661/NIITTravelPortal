package com.stackroute.informationservice.service;

import com.stackroute.informationservice.domain.Place;
import com.stackroute.informationservice.domain.Restaurant;
import com.stackroute.informationservice.exception.PlaceAlreadyExists;
import com.stackroute.informationservice.exception.RestaurantAlreadyExists;
import com.stackroute.informationservice.exception.RestaurantNotFoundException;

import java.util.List;

public interface RestaurantService {
    Restaurant saveRestaurant(Restaurant restaurant, byte[] bytes) throws RestaurantAlreadyExists;

    List<Restaurant> findAllRestaurantsInCity(String city);
    public  Restaurant deleteRestaurant(String restaurantName) throws RestaurantNotFoundException;
    public Restaurant getRestaurantByRestaurantName(String restaurantName) throws RestaurantNotFoundException ;
    public Restaurant updateExistingRestaurant(Restaurant restaurant,String restaurantName) throws RestaurantNotFoundException ;
}
