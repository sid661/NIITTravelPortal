package com.stackroute.informationservice.service;

import com.stackroute.informationservice.domain.Place;
import com.stackroute.informationservice.repositiory.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService{
    @Autowired
    PlaceRepository placeRepository;
    @Override
    public Place savePlace(Place place, byte[] bytes) {
        place.setImage(bytes);
        return placeRepository.save(place);
    }

    @Override
    public List<Place> findAllPlacesInCity(String city) {
        return placeRepository.findByCity(city);
    }
}
