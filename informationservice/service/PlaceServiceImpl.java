package com.stackroute.informationservice.service;

import com.stackroute.informationservice.domain.Place;

import com.stackroute.informationservice.exception.PlaceAlreadyExists;
import com.stackroute.informationservice.exception.PlaceNotFoundException;

import com.stackroute.informationservice.repositiory.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService{
    @Autowired
    PlaceRepository placeRepository;
    @Override
    public Place savePlace(Place place, byte[] bytes) throws PlaceAlreadyExists {
        if(placeRepository.findById(place.getPlace()).isPresent())
        {
            throw new PlaceAlreadyExists();
        }
        else {
            place.setImage(bytes);
            return placeRepository.save(place);
        }
    }

    @Override
    public List<Place> findAllPlacesInCity(String city) {
        return placeRepository.findByCity(city);
    }

    @Override
    public Place deletePlace(String place) throws PlaceNotFoundException {
        if(placeRepository.findByPlace(place).isEmpty())
        {
            System.out.println("Place not found");
            throw new PlaceNotFoundException();
        }
        else
        {
            Place place1 = placeRepository.findByPlace(place);
            placeRepository.delete(place1);
            return place1;
        }
    }

    @Override
    public Place getPlaceByPlace(String place) throws PlaceNotFoundException {
        if(placeRepository.findByPlace(place).isEmpty())
        {
            System.out.println("Place not found");
            throw new PlaceNotFoundException();
        }
        else
        {
            Place place1=placeRepository.findByPlace(place);
            return place1;
        }
    }

}
