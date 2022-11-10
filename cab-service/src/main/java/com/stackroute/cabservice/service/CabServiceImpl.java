package com.stackroute.cabservice.service;

import com.stackroute.cabservice.domain.Cab;
import com.stackroute.cabservice.repository.CabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CabServiceImpl implements CabService {
    @Autowired
    private CabRepository cabRepository;

    @Override
    public Cab saveCab(Cab cab) {
        return cabRepository.save(cab);
    }

    @Override
    public List<Cab> findCabByCity(String city) {
        return cabRepository.findAllByCity(city);
    }

    @Override
    public List<Cab> findAllByCabType(String[] cabType) {
        System.out.println("hello");
        List<Cab> cabs=new ArrayList<>();
        Arrays.stream(cabType).forEach(x-> {
        Cab cab=    cabRepository.findByCabType(x);


        cabs.add(cab);
        });

        return  cabs;
        }



    }



