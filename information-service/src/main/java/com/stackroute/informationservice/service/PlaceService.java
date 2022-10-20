package com.stackroute.informationservice.service;

import com.stackroute.informationservice.domain.Place;

import java.util.List;


public interface PlaceService {

    Place savePlace(Place place,byte[] bytes);

    List<Place> findAllPlacesInCity(String city);
}
