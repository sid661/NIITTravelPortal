package com.stackroute.informationservice.service;

import com.stackroute.informationservice.domain.Place;
import com.stackroute.informationservice.domain.Restaurant;
import com.stackroute.informationservice.exception.RestaurantAlreadyExists;
import com.stackroute.informationservice.exception.RestaurantNotFoundException;
import com.stackroute.informationservice.repositiory.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService{
    @Autowired
    RestaurantRepository restaurantRepository;
    @Override
    public Restaurant saveRestaurant(Restaurant restaurant, byte[] bytes)throws RestaurantAlreadyExists {
        if(restaurantRepository.findById(restaurant.getRestaurantName()).isPresent())
        {
            throw new RestaurantAlreadyExists();
        }
        else{
        restaurant.setImage(bytes);
        return restaurantRepository.save(restaurant);
        }
    }

    @Override
    public List<Restaurant> findAllRestaurantsInCity(String city) {
        return restaurantRepository.findByCity(city);
    }

    @Override
    public Restaurant deleteRestaurant(String restaurantName) throws RestaurantNotFoundException {
        Optional<Restaurant> restaurantOption= Optional.ofNullable(restaurantRepository.findByRestaurantName(restaurantName));
        if(restaurantOption.isEmpty())
        {
            System.out.println("Restaurant not found");
            throw new RestaurantNotFoundException();
        }
        else
        {
            Restaurant restaurant = restaurantRepository.findByRestaurantName(restaurantName);
            restaurantRepository.delete(restaurant);
            return restaurant;
        }
    }

    @Override
    public Restaurant getRestaurantByRestaurantName(String restaurantName) throws RestaurantNotFoundException {
        Optional<Restaurant> restaurantOption= Optional.ofNullable(restaurantRepository.findByRestaurantName(restaurantName));
        if(restaurantOption.isEmpty())
        {
            System.out.println("Restaurant not found");
            throw new RestaurantNotFoundException();
        }
        else
        {
            Restaurant restaurant=restaurantRepository.findByRestaurantName(restaurantName);
            return restaurant;
        }
    }

    @Override
    public Restaurant updateExistingRestaurant(Restaurant restaurant, String restaurantName) throws RestaurantNotFoundException {
        if(restaurantRepository.findById(restaurant.getRestaurantName()).isEmpty())
        {
            throw new RestaurantNotFoundException();
        }
        else
        {
            restaurantRepository.save(restaurant);

            return restaurant;
        }
    }
}
