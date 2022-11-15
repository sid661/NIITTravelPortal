package com.stackroute.informationservice.service;

import com.stackroute.informationservice.domain.Place;

import com.stackroute.informationservice.domain.Restaurant;
import com.stackroute.informationservice.exception.PlaceAlreadyExists;
import com.stackroute.informationservice.exception.PlaceNotFoundException;
import com.stackroute.informationservice.exception.RestaurantNotFoundException;

import java.util.List;


public interface PlaceService {

    Place savePlace(Place place,byte[] bytes)throws PlaceAlreadyExists;
List<Place> getAllplaces();
    List<Place> findAllPlacesInCity(String city);
//    public Place deletePlace(String place) throws PlaceNotFoundException;
//    public Place getPlaceByPlace(String place) throws PlaceNotFoundException ;
//    public Place updateExistingPlace(Place place1, String place) throws PlaceNotFoundException;
}
